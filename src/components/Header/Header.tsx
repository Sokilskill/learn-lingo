import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Header = () => {
  return (
    <header>
      <ChakraLink href="/">LearnLingo</ChakraLink>
      <nav>
        <ul>
          <li>
            <ChakraLink as={ReactRouterLink} to={"/"} className="active">
              Home
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={ReactRouterLink} to="/teachers" className="active">
              Teachers
            </ChakraLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
