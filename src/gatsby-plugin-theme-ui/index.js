import { tailwind } from "@theme-ui/presets"

export default {
  ...tailwind,
  initialColorModeName: "dark",
  colors: {
    text: "#fafafa",
    background: "#1e1e1e",
    muted: "#888",
    modes: {
      light: {
        text: "#1e1e1e",
        background: "#fafafa",
      },
      calm: {
        text: "#001F33",
        background: "#F8DECD",
      },
      contrast: {
        text: "#c6f14e",
        background: "#360bb4",
      },
    },
  },
  styles: {
    ...tailwind.styles,
    blockquote: {
      marginLeft: [0, 2, 4],
      paddingLeft: 4,
      borderLeftWidth: 2,
      borderColor: "muted",
      borderLeftStyle: "solid",
    },
    p: {
      fontSize: [1, 2],
    },
    li: {
      fontSize: [1, 2],
    },
  },
  links: {
    nav: {
      position: "relative",
      display: "inline-block",
      color: "muted",
      textDecoration: "none",

      "::after": {
        content: "''",
        position: "absolute",
        width: "full",
        height: "1px",
        bottom: "0",
        left: "0",
        backgroundColor: "muted",
        transform: "scaleX(0)",
        transformOrigin: "bottom right",
        transition: "transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)",
      },

      ":hover::after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
      },

      "&.active": {
        color: "text",
      },

      "&.active::after": {
        backgroundColor: "text",
      },
    },
    more: {
      position: "relative",
      display: "inline-block",
      mb: [3, 4],
      pb: "2px",
      color: "muted",
      fontSize: 0,
      fontWeight: "semibold",
      letterSpacing: "wide",
      textTransform: "uppercase",
      textDecoration: "none",

      "::after": {
        content: "''",
        position: "absolute",
        width: "full",
        height: "1px",
        bottom: "0",
        left: "0",
        backgroundColor: "muted",
        transform: "scaleX(0)",
        transformOrigin: "bottom right",
        transition: "transform 0.4s cubic-bezier(0.86, 0, 0.07, 1)",
      },

      ":hover::after": {
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
      },
    },
    article: {
      color: "muted",
      fontFamily: "mono",
      fontSize: 0,
    },
  },
  articles: {
    full: {
      gridColumn: "1/-1",
    },
    small: {
      gridColumn: "auto",
    },
  },
  headers: {
    menu: {
      py: 4,
    },
    article: {
      display: ["block", null, "flex"],
      alignItems: "baseline",
      py: [3, 4],
    },
  },
  titles: {
    full: {
      fontSize: [2, 3, 4],
      lineHeight: "none",
    },
    small: {
      fontSize: 2,
      lineHeight: "none",
    },
  },
  dates: {
    small: {
      pl: [null, null, 3],
      color: "muted",
      fontFamily: "mono",
      fontSize: "0.75rem",
    },
  },
}
