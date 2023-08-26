import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
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
    <Link href={path || "/"}>
      <Image width={700} height={400} src={image} alt={title} />
    </Link>
  );
};

const categotys = [
  {
    image: "/category-1.png",
    path: "#",
    title: "Tiểu Học tiếng Anh",
  },
  {
    image: "/category-2.jpg",
    path: "#",
    title: "Tiếng Anh THCS",
  },
  {
    image: "/category-3.jpg",
    path: "#",
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
