import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export const BoxTest = ({
  title,
  path,
  desc,
  label,
}: {
  title: string;
  path: string;
  desc: string;
  label: string;
}) => {
  return (
    <VStack rounded={"2xl"} border={"1px solid teal"} padding={"16px"}>
      <Heading as={"h3"} size={"md"} textAlign={"center"}>
        {title}
      </Heading>
      <Text fontSize={"sm"}>{desc}</Text>
      <Button as={Link} href={path} colorScheme="teal">
        {label}
      </Button>
    </VStack>
  );
};
