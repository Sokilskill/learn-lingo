import { Link as ChakraLink } from "@chakra-ui/react";
import { LogoIcon } from "../Icons/LogoIcon";

export const Logo = () => {
  return (
    <ChakraLink
      href="/"
      display="flex"
      fontWeight={600}
      _hover={{ textDecoration: "none" }}
    >
      <LogoIcon mr={2} />
      LearnLingo
    </ChakraLink>
  );
};
