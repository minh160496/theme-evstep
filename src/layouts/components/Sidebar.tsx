"use client";

import { BASE_URL_MEDIAS } from "@/CONST";
import { Item, categotys } from "@/features/home/Categorys";
import {
  Box,
  Button,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FormContact } from "./FormContact";

export const Sidebar = () => {
  return (
    <Box>
      <Box>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Các khóa học
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 1 }} gap={"20px"}>
          {categotys.map((cat, index) => (
            <Item
              key={index}
              path={cat.path}
              title={cat.title}
              image={`${BASE_URL_MEDIAS}${cat.image}`}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Mạng xã hội
        </Heading>
        <Box
          rounded={"2xl"}
          p="24px"
          bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,46,46,0.835171568627451) 0%, rgba(255,179,0,1) 100%);"
        >
          <VStack spacing={"16px"}>
            <Button
              leftIcon={<FaFacebook />}
              bg={"white"}
              color={"blue.600"}
              w={"full"}
            >
              Fanpage Evstep
            </Button>
            <Button
              leftIcon={<FaFacebook />}
              bg={"white"}
              color={"blue.600"}
              w={"full"}
            >
              Group Evstep
            </Button>
            <Button
              leftIcon={<AiFillYoutube />}
              bg={"white"}
              color={"red.600"}
              w={"full"}
            >
              Youtube Evstep
            </Button>
            <Button
              leftIcon={<SiZalo />}
              bg={"white"}
              color={"blue.600"}
              w={"full"}
            >
              Group Zalo Evstep
            </Button>
            <Button leftIcon={<BiLogoTiktok />} bg={"white"} w={"full"}>
              Tiktok Evstep
            </Button>
            <VStack pt={"24px"} w={"full"}>
              <Text>Liên hệ trực tiếp</Text>
              <Button
                leftIcon={<BsFillTelephoneFill />}
                bg={"white"}
                w={"full"}
              >
                <Link href="tel: 0912345678">0912345678</Link>
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Box>

      <Box pt={"24px"}>
        <FormContact title="Đăng ký nhận tin" action="Đăng ký" />
      </Box>
    </Box>
  );
};
