import { PaletteOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
    lighter?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
    lighter?: string;
  }

  interface Palette {
    bg: Palette["primary"];
    textP: Palette["primary"];
  }
  interface PaletteOptions {
    bg?: PaletteOptions["primary"];
    textP?: PaletteOptions["primary"];
  }
}

export const lightModePalette: PaletteOptions = {
  primary: {
    main: "#3fb0ac",
    light: "rgba(48,135,133 , 0.1)",
    lighter: "#CCE1FF",
  },
  secondary: {
    main: "#121926",
  },
  textP: {
    main: "#fff",
    light: "#444957",
    dark: "#16161D",
  },
  bg: {
    light: "#eef2f6",
    main: "#fff",
    dark: "#eef2f6",
  },
  info: {
    main: "#3fb0ac",
  },
  success: {
    main: "#00b894",
  },
  error: {
    main: "#f44336",
  },
  background: {
    default: "#fff",
  },
};

export const darkModePalette: PaletteOptions = {
  primary: {
    main: "#3fb0ac",
    light: "rgba(48,135,133 , 0.1)",
    dark: "#586580",
    darker: "#44506B",
  },
  secondary: {
    main: "#fff",
  },
  textP: {
    main: "#fff",
    light: "#fff",
    dark: "#16161D",
  },
  bg: {
    light: "#02131d",
    main: "#051114",
    dark: "#030708",
  },
  info: {
    main: "#3fb0ac",
  },
  error: {
    main: "#f44336",
  },
  success: {
    main: "#55efc4",
  },
  background: {
    default: "#051114",
  },
};
