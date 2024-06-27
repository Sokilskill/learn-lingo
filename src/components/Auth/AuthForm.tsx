import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  Input,
  Button,
  Box,
  Heading,
  VStack,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

interface FormData {
  username: string;
  email: string;
  password: string;
}

interface AuthFormProps {
  isRegistration: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  isRegistration = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const mainHeading = isRegistration ? " Registration" : "Log In";

  const description = isRegistration
    ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
    : "Welcome back! Please enter your credentials to access your account and continue your search for an teacher.";

  const buttonSubmitText = isRegistration ? " Sign Up" : "Log In";

  return (
    <Box maxW={{ base: "sm", md: "md", lg: "lg" }} mx="auto">
      <Heading as="h2" size={{ base: "", md: "lg" }} mb={5} textAlign="center">
        {mainHeading}
      </Heading>

      <Text mb={10} fontSize={{ base: "xs", md: "md" }}>
        {description}
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          {isRegistration && (
            <FormControl isInvalid={!!errors.username}>
              <Input
                id="username"
                placeholder="Name"
                {...register("username")}
                fontSize={{ base: "xs", md: "md" }}
              />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>
          )}

          <FormControl isInvalid={!!errors.email}>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              fontSize={{ base: "xs", md: "md" }}
            />
            <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              fontSize={{ base: "xs", md: "md" }}
            />

            <FormErrorMessage>Поле обов'язкове до заповнення</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="orange" width="full" mt={10}>
            {buttonSubmitText}
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
