"use client";

import { BASE_URL_MEDIAS } from "@/CONST";
import Link from "next/link";
import { Avatar, Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const CardBlog = ({
  image,
  title,
  desc,
  path,
  tag,
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
  tag?: string;
}) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <Center
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      py={6}
      pos={"relative"}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-24px)" }}
    >
      <Box
        maxW={"445px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
          <Image
            width={600}
            height={350}
            src={image || `${BASE_URL_MEDIAS}/blog.jpg`}
            alt={title}
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {tag}
          </Text>
          <Heading
            className="event-heading"
            color={"gray.700"}
            fontSize={{ base: "sm", lg: "md" }}
            fontFamily={"body"}
            _hover={{ color: "red.400" }}
          >
            {title}
          </Heading>
          {isMounted && (
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Tác giả</Text>
            <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};
