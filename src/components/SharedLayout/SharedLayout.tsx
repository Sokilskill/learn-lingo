import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Container } from "@chakra-ui/react";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container as="section" maxW={"container.xl"} py={"20px"}>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
