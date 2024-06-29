import { FC } from "react";
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";
import { BurgerMenuProps } from "../../types";

export const BurgerMenu: FC<BurgerMenuProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Logo />
          </DrawerHeader>
          <DrawerBody>
            <Center>{children}</Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
