import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Container } from "@chakra-ui/react";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxW={"lg"}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
