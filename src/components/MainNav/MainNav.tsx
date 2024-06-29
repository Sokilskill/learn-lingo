import { FC } from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, List, ListItem } from "@chakra-ui/react";
import { MainNavProps, NavItem } from "../../types";

const activeStyles = {
  color: "orange.500",
};

const mainNavList: NavItem[] = [
  { title: "Home", to: "/", secure: false },
  { title: "Teachers", to: "/teachers", secure: false },
  { title: "Favorites", to: "/favorites", secure: true },
];

export const MainNav: FC<MainNavProps> = ({
  isLoggedIn = false,
  onCloseMenu,
}) => {
  return (
    <nav>
      <List
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        gap={5}
      >
        {mainNavList.map((navItem) => {
          const noSecureItem = !navItem.secure;

          return (
            (noSecureItem || isLoggedIn) && (
              <ListItem key={navItem.to}>
                <ChakraLink
                  as={ReactRouterLink}
                  to={navItem.to}
                  _activeLink={activeStyles}
                  onClick={onCloseMenu}
                >
                  {navItem.title}
                </ChakraLink>
              </ListItem>
            )
          );
        })}
      </List>
    </nav>
  );
};
