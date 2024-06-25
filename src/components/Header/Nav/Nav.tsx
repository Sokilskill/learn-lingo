import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, List, ListItem } from "@chakra-ui/react";

const activeStyles = {
  color: "orange.500",
};

export const Nav = () => {
  return (
    <nav>
      <List display={"flex"} flexDirection={"row"} gap={5}>
        <ListItem>
          <ChakraLink as={ReactRouterLink} to={"/"} _activeLink={activeStyles}>
            Home
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ChakraLink
            as={ReactRouterLink}
            to="/teachers"
            _activeLink={activeStyles}
          >
            Teachers
          </ChakraLink>
        </ListItem>
      </List>
    </nav>
  );
};
