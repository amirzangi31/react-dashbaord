import { createTheme } from "@mui/material";
import { darkModePalette, lightModePalette } from "./palette";

export enum ThemeVariantsProps {
  light = "light",
  dark = "dark",
}

// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

export const theme = (mode: ThemeVariantsProps) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light" ? lightModePalette : darkModePalette),
    },
  });
};
