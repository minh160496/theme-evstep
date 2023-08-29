"use client";

import { BASE_URL_MEDIAS } from "@/CONST";
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
    >
      <Box flex={1}>
        <Image
          width={500}
          height={300}
          src={image || `${BASE_URL_MEDIAS}/blog.jpg`}
          alt={title}
        />
      </Box>

      <Stack flex={1}>
        <CardBody>
          <HStack>
            <Tag size={"md"} variant="solid" colorScheme="red">
              {tag}
            </Tag>
            <Heading as={"h4"} size="sm">
              {title}
            </Heading>
          </HStack>

          {isMounted && (
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
        </CardBody>

        <CardFooter>
          <Button variant="link" colorScheme="red" as={Link} href={path ?? "#"}>
            Xem thêm
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
