"use client";

import { menus } from "@/router";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { Logo } from "./Logo";

interface INavItem {
  title: string;
  children?: Array<INavItem>;
  path?: string;
}

export const MobileNavItem = ({ title, children, path }: INavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={path ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"gray.600"}>
          {title}
        </Text>
        {children && (
          <Icon
            as={BsChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.title} py={2} href={child.path}>
                {child.title}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        icon={
          isOpen ? (
            <MdClose width={3} height={3} />
          ) : (
            <AiOutlineMenu width={5} height={5} />
          )
        }
        variant={"ghost"}
        aria-label={"Toggle Navigation"}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justify={"center"}>
              <Logo />
            </Flex>
          </DrawerHeader>
          <Divider />

          <DrawerBody>
            <Stack bg={"white"} p={4} display={{ md: "none" }}>
              {menus.map((navItem) => (
                <MobileNavItem key={navItem.title} {...navItem} />
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
