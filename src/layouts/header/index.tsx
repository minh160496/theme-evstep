"use client";

import { Box, Container, Divider, Flex } from "@chakra-ui/react";
import { DesktopNav } from "../components/DeskhopNav";
import { Logo } from "../components/Logo";
import { MobileNav } from "../components/MobileNav";
import { Search } from "../components/Search";
import { HeaderTop } from "../components/HeaderTop";

export const Header = () => {
  return (
    <>
      <Container maxW="6xl" py="6px">
        <HeaderTop />
      </Container>
      <Divider />
      <Box boxShadow="md">
        <Container
          as={Flex}
          bg={"white"}
          color={"gray.600"}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          maxW="6xl"
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
            <MobileNav />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            align={"center"}
          >
            <Logo />
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Search />
        </Container>
      </Box>
    </>
  );
};
