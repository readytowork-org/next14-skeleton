"use client";

import React, { createContext, FC, ReactNode, useState } from "react";
import { Alert, AlertColor, Snackbar } from "@mui/material";
import Image from "next/image";

interface NotificationContextType {
  showNotification: (message: string, severity: AlertColor) => void;
}

export const NotificationContext = createContext<NotificationContextType>(
  {} as NotificationContextType,
);

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");

  const showNotification = (message: string, severity: AlertColor) => {
    setMessage(message);
    setSeverity(severity || "success");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiPaper-elevation": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 16px",
            border: "1px solid",
            borderColor:
              severity === "success"
                ? "#3AC486"
                : severity === "error"
                  ? "#E71C1C"
                  : severity === "warning"
                    ? "transparent"
                    : "blue",
            borderImageSource:
              severity === "warning"
                ? "linear-gradient(169.34deg, #F8B133 3.15%, #E5332A 111.43%)"
                : "none",
            borderImageSlice: severity === "warning" ? 1 : undefined,
          },
          "& .MuiAlert-message": {
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "24px",
          },
        }}
      >
        <Alert
          severity={severity}
          onClose={handleClose}
          icon={
            <Image
              src={
                severity === "success"
                  ? "/icons/notify-success.svg"
                  : severity === "error"
                    ? "/icons/notify-error.svg"
                    : "/icons/notify-warning.svg"
              }
              height={18}
              width={18}
              alt={"notify-icon"}
            />
          }
        >
          {message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};
