import { Text, useMediaQuery } from "@chakra-ui/react";

export const Footer = () => {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return <Text>Footer</Text>;
};
