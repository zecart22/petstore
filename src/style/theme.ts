import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    theme: {
      white: "#FFFF",
      black: "#0A0404",
      gray: "#E8E2E2",
      yellow: "#FFA200",
      purple: "#8158C5",
    },
  },

  styles: {
    global: {
      body: {
        bg: "theme.white",
        color: "gray",
      },
    },
  },
});

export default theme;
