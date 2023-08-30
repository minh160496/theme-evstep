import {
  Avatar,
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Item = ({
  name,
  label,
  content,
  title,
  image,
}: {
  name: string;
  label: string;
  content: string;
  title: string;
  image: string;
}) => {
  return (
    <Box
      bg={"gray.700"}
      p={"24px"}
      rounded={"xl"}
      color={"white"}
      pos={"relative"}
    >
      <HStack pb="32px">
        <Avatar color={"white"} />
        <HStack flexDir={"column"} align={"start"}>
          <Text
            textAlign={"center"}
            fontSize={{ base: "sm", lg: "xl" }}
            fontWeight={"bold"}
          >
            {name}
          </Text>
          <Text textAlign={"center"} fontSize={"sm"} fontWeight={"bold"}>
            {label}
          </Text>
        </HStack>
      </HStack>
      <Heading size={{ base: "sm", lg: "md" }}>{title}</Heading>
      <HStack pt={"24px"} flexDir={{ base: "column", lg: "row" }}>
        <Box flex={1}>
          <Image
            src={image}
            alt={name}
            width={400}
            height={200}
            style={{ borderRadius: "12px" }}
          />
        </Box>
        <Image
          src={`/dialog.svg`}
          width={60}
          height={60}
          style={{ position: "absolute", top: 24, right: 32 }}
          alt="image"
        />
        <Text flex={1}>{content}</Text>
      </HStack>
    </Box>
  );
};

const reviews = [
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
  },
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
  },
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
  },
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
  },
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
  },
];

export const StyledSwiper = styled(Swiper)`
  width: min(80%, 800px);
  background-color: transparent;
`;

export const Review = () => {
  return (
    <Box bg="gray.50" py={"62px"}>
      <Container maxW="9xl" overflow={"hidden"}>
        <Heading
          as={Flex}
          fontSize={"2xl"}
          color={"red.500"}
          gap={"8px"}
          flexDir={{ base: "column" }}
          justify={"center"}
          pb={"64px"}
          textAlign={"center"}
        >
          <Heading
            as={Flex}
            fontSize={"2xl"}
            color={"red.500"}
            gap={"8px"}
            justify={"center"}
            textAlign={"center"}
          >
            CẢM NHẬN
            <FaRegCommentDots />
          </Heading>
          <Heading fontSize={"2xl"} color={"gray.700"} textAlign={"center"}>
            CỦA HỌC VIÊN VÀ PHỤ HUYNH
          </Heading>
        </Heading>
        <StyledSwiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Item
                name={review.name}
                label={review.label}
                content={review.content}
                title={review.title}
                image={review.image}
              />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Container>
    </Box>
  );
};
