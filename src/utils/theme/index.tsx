"use client";
import { HIRAGINO_SANS } from "@/src/fonts";
import ChevronSmallDown from "@/icons/chevronsmalldown.svg";
import { createTheme } from "@mui/material/styles";
import React from "react";
import Image from "next/image";

export const COLORS = {
  palette: {
    primary: {
      main: "#02257C",
    },
    secondary: {
      main: "#757575",
    },
    background: {
      default: "#E7E7E7",
    },
    action: {
      disabled: "#FFF",
      disabledBackground: "#A7A4A4",
    },
    text: {
      primary: "#191919",
      secondary: "#333333",
    },
    error: {
      main: "#DB2955",
    },
  },
  components: {
    button: {
      color: "#0958A2",
    },
    menu: {
      item: {
        selected: "#E6F4FF",
      },
    },
    input: {
      backgroundColor: "#F7F7F7",
      placeholder: "#666666B2",
      border: {
        default: "#AAAAAA",
        hover: "#4096ff",
        focus: "#0671D5",
      },
      boxShadow: {
        focus: "#0591ff1a",
      },
      error: {
        boxShadow: {
          hover: "#ff26050f",
          focus: "#ff26050f",
        },
      },
    },
    radio: {
      outer: "#B7B7B7",
      checkedCircle: "#0671D5",
    },
    select: {
      multiple: {
        chip: {
          backgroundColor: "#EDF0F5",
          text: "",
        },
      },
    },
  },
};

export const APP_THEME = createTheme({
  palette: COLORS.palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: HIRAGINO_SANS.style.fontFamily,
    caption: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "17.38px",
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: "23.17px",
      fontWeight: 500,
    },
    h1: {
      fontSize: "28px",
      lineHeight: "42px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "26.6px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "26px",
    },
    body1: {
      fontSize: "14px",
      fontWeight: 300,
      lineHeight: "21px",
      color: COLORS.palette.text.secondary,
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "var(--Disabled, #88888899)",
          fontSize: "14px",
          fontWeight: 400,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: "0",
          backgroundColor: "#fff",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .MuiPaginationItem-page.Mui-selected": {
            borderColor: "#0671D5",
            backgroundColor: "transparent",
            color: "#0671D5",
          },
          "& .MuiPaginationItem-previous, & .MuiPaginationItem-next": {
            border: "none",
          },
          "& .MuiPagination-ul": {
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            rowGap: "6px",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0px 16px",
          border: `1px solid ${
            ownerState.severity === "success"
              ? "#3AC486"
              : ownerState.severity === "error"
                ? "#E71C1C"
                : ownerState.severity === "warning"
                  ? "orange"
                  : "blue"
          }`,
        }),
        action: {
          padding: "0px",
        },
        message: {
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "24px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: 0,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: HIRAGINO_SANS.style.fontFamily,
          fontSize: "14px",
          fontWeight: "500",
          color: theme.palette.text.primary,
          lineHeight: "20.27px",
        }),
      },
    },
    MuiAutocomplete: {
      defaultProps: {},
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            padding: "6px 12px",
            display: "flex",
            flex: 1,
            "& .MuiAutocomplete-input": {},
            "& .MuiAutocomplete-endAdornment": {
              right: "18px",
            },
          },
        },
        tag: ({ theme }) => ({
          color: theme.palette.text.secondary,
          fontSize: "inherit",
          background: COLORS.components.select.multiple.chip.backgroundColor,
          borderRadius: "4px",
          height: "unset",
          padding: "4px 0",
          margin: "unset",
          marginRight: "8px",

          "& .MuiChip-deleteIcon": {
            fontSize: "12px",
            color: `${theme.palette.text.primary} !important`,
            borderRadius: "50%",

            "&:hover": {},
          },
        }),
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: (iconProps) => <ChevronSmallDown {...iconProps} />,
      },
      styleOverrides: {
        root: {
          padding: "unset",
          "&.MuiInputBase-sizeSmall .MuiSelect-select": {
            padding: "5px 12px",
          },
        },
        select: ({ theme }) => ({
          padding: "10px 12px",
          fontSize: "14px",

          "&.MuiSelect-multiple": {
            padding: "6px 12px",
          },

          "& .MuiChip-root": {
            color: theme.palette.text.secondary,
            fontSize: "inherit",
            background: COLORS.components.select.multiple.chip.backgroundColor,
            borderRadius: "4px",
            height: "unset",
            padding: "4px 0",

            "& .MuiChip-deleteIcon": {
              fontSize: "12px",
              color: `${theme.palette.text.primary} !important`,
              borderRadius: "50%",

              "&:hover": {},
            },
          },
        }),
        icon: {
          position: "absolute",
          right: "12px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: 14,
          height: "44px",
          backgroundColor: `${COLORS.components.input.backgroundColor}`,
          padding: "10px 8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "6px",
            border: `1px solid ${COLORS.components.input.border.default}`,
            transition: "all 0.2s",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${COLORS.components.input.border.hover}`,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${COLORS.components.input.border.focus}`,
            boxShadow: `0 0 0 2px ${COLORS.components.input.boxShadow.focus}`,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${theme.palette.error.main}`,
          },
          "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
            boxShadow: `0 0 0 2px ${COLORS.components.input.error.boxShadow.hover}`,
          },
          "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
            boxShadow: `0 0 0 2px ${COLORS.components.input.error.boxShadow.focus}`,
          },
        }),
        sizeSmall: {
          padding: "5px 12px",
        },
        input: {
          padding: "0",
          height: "unset",
          "&::placeholder": {
            color: `${COLORS.components.input.placeholder}`,
            fontFamily: HIRAGINO_SANS.style.fontFamily,
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: "300",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "unset",
        },
      },
      defaultProps: {
        checkedIcon: (
          <div
            style={{
              width: "20px",
              height: "20px",
              border: `1px solid ${COLORS.components.radio.outer}`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: COLORS.components.radio.checkedCircle,
              }}
            />
          </div>
        ),
        icon: (
          <div
            style={{
              width: "20px",
              height: "20px",
              border: `1px solid ${COLORS.components.radio.outer}`,
              borderRadius: "50%",
            }}
          />
        ),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "unset",
        },
      },
      defaultProps: {
        checkedIcon: (
          <div
            style={{
              width: "18px",
              height: "18px",
              border: `1px solid ${COLORS.components.radio.outer}`,
              borderRadius: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.components.radio.checkedCircle,
            }}
          >
            <Image
              src={"/icons/check-icon.svg"}
              alt={""}
              width={12}
              height={8}
            />
          </div>
        ),
        icon: (
          <div
            style={{
              width: "18px",
              height: "18px",
              border: `1px solid ${COLORS.components.radio.outer}`,
              borderRadius: "2px",
            }}
          />
        ),
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          gap: "8px",
          marginLeft: 0,
          alignItems: "center",
          color: "",
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        centerRipple: false,
        focusRipple: false,
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "4px",
          fontFamily: HIRAGINO_SANS.style.fontFamily,
          fontSize: "14px",
          lineHeight: "20.2px",
          fontWeight: 500,
          padding: "0 12px",
          textTransform: "none",
          color: COLORS.components.button.color,
        },
        outlined: {
          border: "none",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            padding: "1px",
            borderRadius: "4px",
            background:
              "linear-gradient(169.34deg, #F8B133 3.15%, #E5332A 111.43%)",
            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            maskComposite: "exclude",
          },

          "&.Mui-disabled": {
            background: COLORS.palette.action.disabledBackground,
          },
        },
        contained: {
          background:
            "linear-gradient(169.34deg, #F8B133 3.15%, #E5332A 111.43%)",
          color: "#ffff",

          "&.Mui-disabled": {
            background: COLORS.palette.action.disabledBackground,
          },
        },
        sizeSmall: {
          height: "40px",
        },
        sizeMedium: {
          height: "50px",
          fontSize: "18px",
          lineHeight: "27px",
          fontWeight: 600,
          padding: "0 20px",
        },
        sizeLarge: {
          height: "52px",
          fontSize: "18px",
          lineHeight: "27px",
          fontWeight: 600,
          padding: "0 20px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiPaper-root": {
            borderBottom: "1px solid #D1CFCF ",
            boxShadow: "none",
          },
        },
        rounded: {
          marginTop: "4px",
          borderRadius: "8px",
          boxShadow:
            "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          padding: "4px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          padding: "5px 12px",
          fontSize: "14px",

          "&.Mui-selected": {
            background: COLORS.components.menu.item.selected,
            "&.Mui-focusVisible": {
              background: COLORS.components.menu.item.selected,
            },

            ":hover": {
              background: COLORS.components.menu.item.selected,
            },
          },
          "&.Mui-focusVisible": {
            background: "rgba(0, 0, 0, 0.04)",
          },
        },
      },
    },

    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});
