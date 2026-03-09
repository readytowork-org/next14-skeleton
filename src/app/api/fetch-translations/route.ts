/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/fetch-sheet/route.js
import fs from "fs";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

export async function POST() {
  try {
    // 1. Load credentials
    const credentialsPath = path.join(process.cwd(), "service-account.json");
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, "utf8"));

    // 2. Authenticate
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    });

    const sheets = google.sheets({ version: "v4", auth });

    // 3. Get all sheet names first
    const spreadsheet: any = await sheets.spreadsheets.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID
    });

    const enData: Record<string, Record<string, string>> = {};
    const jaData: Record<string, Record<string, string>> = {};

    // 4. Process each sheet tab
    for (const sheet of spreadsheet.data.sheets) {
      const sheetName = sheet.properties.title;
      // Get columns A (Copy), B (key), C (en), D (ja) - we'll ignore column A
      const range = `${sheetName}!A:D`;

      try {
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID,
          range: range
        });

        const rows = response.data.values || [];

        // Initialize sheet objects
        enData[sheetName] = {};
        jaData[sheetName] = {};

        // Skip header row (assuming first row is headers)
        const dataRows = rows.slice(1);

        dataRows.forEach((row: any) => {
          // row[0] = Copy (ignored)
          // row[1] = key
          // row[2] = en
          // row[3] = ja
          const key = row[1];
          const enValue = row[2];
          const jaValue = row[3];

          if (key) {
            if (enValue !== undefined) enData[sheetName][key] = enValue;
            if (jaValue !== undefined) jaData[sheetName][key] = jaValue;
          }
        });
      } catch (error: any) {
        console.error(`Error processing sheet ${sheetName}:`, error);
      }
    }

    // 5. Save to two separate files
    const messagesDir = path.join(process.cwd(), "src", "messages");
    fs.mkdirSync(messagesDir, { recursive: true });

    fs.writeFileSync(path.join(messagesDir, "en.json"), JSON.stringify(enData, null, 2));
    fs.writeFileSync(path.join(messagesDir, "ja.json"), JSON.stringify(jaData, null, 2));

    // 6. Return success response
    return NextResponse.json({
      success: true,
      enCount: Object.keys(enData).reduce((sum, sheet) => sum + Object.keys(enData[sheet]).length, 0),
      jaCount: Object.keys(jaData).reduce((sum, sheet) => sum + Object.keys(jaData[sheet]).length, 0),
      location: path.relative(process.cwd(), messagesDir)
    });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
