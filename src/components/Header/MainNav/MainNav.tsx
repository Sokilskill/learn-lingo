import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, List, ListItem } from "@chakra-ui/react";

const activeStyles = {
  color: "orange.500",
};

export const MainNav: React.FC<{ isLoggedIn: boolean }> = ({
  isLoggedIn = false,
}) => {
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
        {isLoggedIn && (
          <ListItem>
            <ChakraLink
              as={ReactRouterLink}
              to="/favorites"
              _activeLink={activeStyles}
            >
              Favorites
            </ChakraLink>
          </ListItem>
        )}
      </List>
    </nav>
  );
};
