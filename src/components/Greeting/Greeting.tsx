import { Button, Heading, Highlight, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Greeting = () => {
  return (
    <>
      <Heading
        as="h2"
        mb="32px"
        fontSize={{ base: "28px", md: "32px", lg: "32px" }}
        maxW={{ base: "100%", lg: "420px" }}
      >
        <Highlight
          query="language"
          styles={{
            display: "inline-block",
            fontStyle: "italic",
            fontWeight: "600",
            pb: "5px",
            lineHeight: " 0.6",
            rounded: "8px",
            bg: "orange.100",
          }}
        >
          Unlock your potential with the best language tutors
        </Highlight>
      </Heading>

      <Text mb={"64px"} maxW={"400px"}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </Text>

      <Button
        as={Link}
        to="/teachers"
        w={"max-content"}
        h={"max-content"}
        borderRadius={"12px"}
        px="88px"
        py="16px"
        colorScheme="orange"
      >
        Get Started
      </Button>
    </>
  );
};
