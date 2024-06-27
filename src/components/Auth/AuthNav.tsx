import { List, Button, ListItem } from "@chakra-ui/react";

interface AuthNavProps {
  onClick: (label: "login" | "registration") => void;
}
const listStyles = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
};
const buttonStyles = {
  borderRadius: "8px",
};

const AuthNav: React.FC<AuthNavProps> = ({ onClick }) => {
  return (
    <List {...listStyles}>
      <ListItem>
        <Button
          variant="ghost"
          onClick={() => onClick("login")}
          {...buttonStyles}
        >
          Log In
        </Button>
      </ListItem>
      <ListItem>
        <Button
          colorScheme="orange"
          onClick={() => onClick("registration")}
          {...buttonStyles}
        >
          Register
        </Button>
      </ListItem>
    </List>
  );
};

export default AuthNav;
