import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "gray.900")(props),
    },
  }),
};

// 2. Add your color mode config
const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles,
});
