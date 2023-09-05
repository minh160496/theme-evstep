"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { InputRes } from "../../components/InputRes";
import { Logo } from "../components/Logo";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box bg={"gray.700"} color={"White"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Flex justify="center" align={"center"} direction="column" mb="32px">
          <Heading size="md" textAlign="center" mb={4}>
            Đăng ký nhận bản tin
          </Heading>
          <Box maxW="md">
            <InputRes placeholder="Nhập email để đăng ký" label="Đăng ký" />
          </Box>
        </Flex>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Thông tin liên hệ</ListHeader>
            <Box as="a" href={"#"}>
              Ms Hoa Junior - English for the future
            </Box>
            <Box as="a" href={"#"}>
              Hotline: 0965500306
            </Box>
            <Box as="a" href={"#"}>
              Email: junior@anhngumshoa.com
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Hỗ trợ</ListHeader>
            <Box as="a" href={"#"}>
              Help Center
            </Box>
            <Box as="a" href={"#"}>
              Safety Center
            </Box>
            <Box as="a" href={"#"}>
              Community Guidelines
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Về EVStep</ListHeader>
            <Logo />
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Mạng xã hội</ListHeader>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Twitter"}
                href={"https://www.facebook.com/groups/vsteponline"}
              >
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaTiktok />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "center" }}
          align={{ md: "center" }}
        >
          <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
        </Container>
      </Box>
    </Box>
  );
};
