import Link from "next/link";
import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { BASE_URL_MEDIAS } from "../../CONST";

export const Item = ({
  path,
  image,
  title,
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
    >
      <Image width={700} height={400} src={image} alt={title} />
      <Box
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        right={"40%"}
        bottom={0}
        align={"center"}
      >
        <Heading as={"h2"} size={"md"} color={"white"} textAlign={"center"}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export const categotys = [
  {
    image: "/category-1.png",
    path: "/tin-tuc",
    title: "Tiểu Học tiếng Anh",
  },
  {
    image: "/category-2.jpg",
    path: "/tin-tuc",
    title: "Tiếng Anh THCS",
  },
  {
    image: "/category-3.jpg",
    path: "/tin-tuc",
    title: "Lyện thi - luyện kỹ năng",
  },
];

export const Categorys = () => {
  return (
    <Container maxW="6xl">
      <Heading fontSize="2xl" mb="24px" textAlign="center">
        Lựa chọn dành cho bạn?
      </Heading>
      <SimpleGrid
        spacing={"8"}
        gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      >
        {categotys.map((categoty, index) => (
          <Item
            key={index}
            path={categoty.path}
            title={categoty.title}
            image={`${BASE_URL_MEDIAS}${categoty.image}`}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
