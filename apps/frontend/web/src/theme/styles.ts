import { extendTheme } from "@chakra-ui/react"

const styles = extendTheme({
    colors: {
      turquoise: {
        200: "#D9F1F0",
        300: "#C6E9E9",
        500: "#92D5D4",
        900: "#42B7B4",
      },
      blue: {
        200: "#E4E4ED",
        500: "#BCBCD2",
        900: "#797AA6",
      },
      purple: {
        200: "#EFD8EB",
        300: "#E7C5E0",
        500: "#D79ECC",
        900: "#B03D99",
      },
      pink: {
        200: "#FACCE8",
        500: "#F380C5",
        900: "#E7008C",
      },
      gold: {
        200: "#F7F0D0",
        300: "#F2E9B9",
        500: "#E7D478",
        900: "#D4B514",
      },
    },
    fonts: {
        heading: `'Orbitron', sans-serif`,
        body: `'Chakra Petch', sans-serif`,
      },
  })

  export default styles;