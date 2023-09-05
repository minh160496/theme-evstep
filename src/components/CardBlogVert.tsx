"use client";

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CardBlogVert = ({
  title,
  desc,
  tag,
  image,
  path,
}: {
  title: string;
  desc: string;
  tag: string;
  image?: string;
  path?: string;
}) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      rounded={"2xl"}
      as={Link}
      href={path ?? "#"}
    >
      <Box flex={1}>
        <Box m={"12px 24px"} rounded={"sm"} overflow={"hidden"}>
          <Image
            width={500}
            height={300}
            src={image || `/blog.jpg`}
            alt={title}
          />
        </Box>
      </Box>

      <Stack flex={1}>
        <CardBody pb={0}>
          <HStack>
            <Tag
              size={"xl"}
              variant="solid"
              colorScheme="red"
              fontSize={"sm"}
              p="6px"
            >
              {tag}
            </Tag>
            <Heading
              as={"h4"}
              size="sm"
              _hover={{ color: "red.500" }}
              transition={"all ease .3s"}
            >
              {title}
            </Heading>
          </HStack>

          {isMounted && (
            <Text
              color={"gray.500"}
              fontSize={".8rem"}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
        </CardBody>

        <CardFooter pt={0}>
          <Button variant="link" colorScheme="red">
            Xem thêm
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
