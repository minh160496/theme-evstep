import { Link } from "@chakra-ui/next-js";
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { BASE_URL_MEDIAS } from "../../CONST";

export const EventItem = ({
  image,
  title,
  desc,
  path,
}: {
  image: string;
  title: string;
  desc: string;
  path: string;
}) => {
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
          <Image width={350} height={350} src={image} alt={title} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Blog
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
          <Text color={"gray.500"} fontSize={{ base: "sm" }}>
            {desc}
          </Text>
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

const events = [
  {
    image: `${BASE_URL_MEDIAS}/blog.jpg`,
    path: "#",
    title:
      "Phát động cuộc thi: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” dành cho tất cả học viên JUNIOR trên toàn quốc",
    desc: "PHÁT ĐỘNG CUỘC THI: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” DÀNH CHO TẤT CẢ HỌC VIÊN JUNIOR TRÊN TOÀN QUỐC. Cuộc thi nằm trong chuỗi hoạt động hưởng ứng mùa Back To School và chia sẻ giá trị của bộ sách FUTURE của Ms Hoa Junior.",
  },
  {
    image: `${BASE_URL_MEDIAS}/blog.jpg`,
    path: "#",
    title:
      "Phát động cuộc thi: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” dành cho tất cả học viên JUNIOR trên toàn quốc",
    desc: "PHÁT ĐỘNG CUỘC THI: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” DÀNH CHO TẤT CẢ HỌC VIÊN JUNIOR TRÊN TOÀN QUỐC. Cuộc thi nằm trong chuỗi hoạt động hưởng ứng mùa Back To School và chia sẻ giá trị của bộ sách FUTURE của Ms Hoa Junior.",
  },
  {
    image: `${BASE_URL_MEDIAS}/blog.jpg`,
    path: "#",
    title:
      "Phát động cuộc thi: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” dành cho tất cả học viên JUNIOR trên toàn quốc",
    desc: "PHÁT ĐỘNG CUỘC THI: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” DÀNH CHO TẤT CẢ HỌC VIÊN JUNIOR TRÊN TOÀN QUỐC. Cuộc thi nằm trong chuỗi hoạt động hưởng ứng mùa Back To School và chia sẻ giá trị của bộ sách FUTURE của Ms Hoa Junior.",
  },
];

export const Event = () => {
  return (
    <Container maxW={"6xl"} pb={"64px"}>
      <Heading textAlign={"center"} size={"lg"} pb="24px">
        Loạt sự kiện HOT - đừng vội lướt qua!
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} gap={"24px"}>
        {events.map((event, index) => (
          <EventItem
            key={index}
            image={event.image}
            title={event.title}
            desc={event.desc}
            path={event.path}
          />
        ))}
      </SimpleGrid>

      <HStack justify={"center"}>
        <Button as={Link} href={"#"} colorScheme="red">
          Xem tất cả
        </Button>
      </HStack>
    </Container>
  );
};
