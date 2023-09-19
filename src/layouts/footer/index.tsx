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
import Link from "next/link";

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
            <Box as={Link} href={"#"}>
              Vstep - English center
            </Box>
            <Box as={Link} href={"tel:0965500306"}>
              Địa chỉ: Số 116 Trần Vỹ, Mai Dịch, Cầu Giấy, Hà Nội
            </Box>
            <Box as={Link} href={"tel:0965500306"}>
              Hotline: 0914190055
            </Box>
            <Box as={Link} href={"mailto:luyenthi.Vstep@gmail.com"}>
              Email: luyenthi.Vstep@gmail.com
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Hỗ trợ</ListHeader>
            <Box
              as={Link}
              href={"https://tienganhb1.com/v%E1%BB%81-ch%C3%BAng-t%C3%B4i"}
            >
              Về chúng tôi
            </Box>
            <Box as={Link} href={"/chung-chi-tieng-a2"}>
              Chứng chỉ A2
            </Box>
            <Box as="a" href={"/chung-chi-tieng-b1"}>
              CHứng chỉ B1
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Nhận diện</ListHeader>
            <Logo />
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Mạng xã hội</ListHeader>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/onthichungchi.Vstep"}
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
