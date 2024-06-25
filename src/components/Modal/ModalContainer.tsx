import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";

interface ModalContainerProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          px={{ base: 5, md: 10, lg: "64px" }}
          py={{ base: 10 }}
          w={{ base: "calc(100vw - 50px)", md: "100%" }}
          maxW={"max-content"}
        >
          <ModalCloseButton />
          <ModalBody p="0">{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
