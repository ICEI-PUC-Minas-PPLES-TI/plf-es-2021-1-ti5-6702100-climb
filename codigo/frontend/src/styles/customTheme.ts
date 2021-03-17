import { theme, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const colors = {
  dark: {
    Nord0: "#2E3440",
    Nord1: "#3B4252",
    Nord2: "#434C5E",
  },
  light: {
    Nord4: "#D8DEE9",
    Nord5: "#E5E9F0",
    Nord6: "#ECEFF4",
  },
  aurora: {
    Nord7: "#8FBCBB",
    Nord8: "#88C0D0",
    Nord9: "#81A1C1",
    Nord10: "#5E81AC",
    Nord11: "#BF616A",
    Nord12: "#D08770",
    Nord13: "#EBCB8B",
    Nord14: "#A3BE8C",
    Nord15: "#B48EAD",
  },
};

const customTheme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode(colors.dark.Nord2, colors.light.Nord4)(props),
        bg: mode(colors.light.Nord6, colors.dark.Nord0)(props),
        backgroundImage: 'url("/assets/background-image.svg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      },
    }),
  },

  fonts: {
    ...theme.fonts,
    /** Example */
    // body: "Work Sans, sans-serif",
    // heading: "Markazi Text, serif",
  },

  colors: {
    ...theme.colors,
    /** Example */
    // teal: {
    //   ...theme.colors.teal,Email
    //   700: "#005661",
    //   500: "#00838e",
    //   300: "#4fb3be",
    // },
  },
  components: {
    /** Example */
    Box: {
      baseStyle: {
        borderRadius: 15,
      },
    },
    FormControl: {
      parts: ["text", "label", "inputGroup","input", "button"],
      baseStyle: (props) => ({
        backgroundColor: mode(colors.dark.Nord2, colors.light.Nord4)(props),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        text: {
          fontSize: "40px",
          color: mode(colors.light.Nord4, colors.dark.Nord2)(props),
          marginBottom: "5%",
        },
        label: {
          color: mode(colors.light.Nord4, colors.dark.Nord2)(props),
          marginBottom: "5%",
          fontSize: '18px'
        },
        inputGroup: {
          backgroundColor: mode(colors.light.Nord4, colors.dark.Nord2)(props)
        },
        input: {
          color: mode(colors.light.Nord4, colors.dark.Nord2)(props),
          marginBottom: "5%",
          _placeholder: {
            color: mode(colors.light.Nord4, colors.dark.Nord2)(props),
          },
        },
        button: {
          backgroundColor: mode(colors.light.Nord4, colors.dark.Nord2)(props),
          _hover: {
            backgroundColor: mode(colors.light.Nord6, colors.dark.Nord0)(props),
          },
        },
      }),
      sizes: {
        md: {
          width: "25%",
          marginRight: "8%",
          padding: "25px",
        },
      },
      defaultProps: {
        size: "md",
      },
    },
  },
});

export default customTheme;