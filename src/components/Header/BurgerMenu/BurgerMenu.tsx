import {
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Logo } from "../Logo/Logo";

interface BurgerMenuProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
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
