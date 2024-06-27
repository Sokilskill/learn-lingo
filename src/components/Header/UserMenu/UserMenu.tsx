import { Button, Text } from "@chakra-ui/react";

export const UserMenu = () => {
  const user = {
    name: "John",
  };
  const handlerLogOut = () => {
    console.log("user logOut");
  };
  return (
    <>
      <Text fontSize="2xl">Hello, {user.name}</Text>
      <Button onClick={handlerLogOut}>LogOut</Button>
    </>
  );
};
