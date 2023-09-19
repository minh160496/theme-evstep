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
      bg={"green.700"}
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
        {/* <Box flex={1}>
          <Image
            src={image}
            alt={name}
            width={400}
            height={200}
            style={{ borderRadius: "12px" }}
          />
        </Box> */}
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
    name: "Lưu Thị Khuyên ",
    label: "Học viên Vstep",
    image: `/student.jpg`,
    title: "Học Viên",
    content:
      '"Rất cảm ơn trung tâm và các giảng viên đã hỗ trợ em rất nhiều trong việc ôn luyện trong kỳ thi lấy chứng chỉ Vstep. Mặc dù mục tiêu ban đầu đặt ra là B1 nhưng kết quả đạt được là B2 ngoài mong đợi của em."',
  },
  {
    name: "Lê Đức Anh",
    label: "Học viên Vstep",
    image: `/student.jpg`,
    title: "Học Viên",
    content:
      '"Mặc dù việc học hoàn toàn trực tuyến nhưng không vì thế làm giảm chất lượng đào tạo. Mình cảm nhận được lượng kiến thức và sự hỗ trợ từ các thầy cô là rất nhiều. Xin cảm ơn trung tâm"',
  },
  {
    name: "Nguyễn Văn Bắc",
    label: "Học viên Vstep",
    image: `/student.jpg`,
    title: "Học Viên",

    content:
      '"Với lộ trình đào tạo để đạt mục tiêu B2 thì tôi được hỗ trợ rất nhiều trong suốt quá trình học tập và cuối cùng đã đạt được mục tiêu đề ra. Cảm ơn đội ngũ và trung tâm, chúc cho các bạn đang theo học sẽ có một kết quả thi tốt."',
  },
  {
    name: "Nguyễn Đình Hưng ",
    label: "Học viên Vstep",
    image: `/student.jpg`,
    title: "Học Viên",
    content:
      '"Phương pháp đào tạo và học tập rất sát với khung sườn của bài thi Vstep mà Bộ GD đã đưa ra. Điều tôi thấy hài lòng nhất là tôi hoàn toàn không bị xáo trộn bởi tôi có thể sắp xếp việc ôn luyện của mình vào bất kỳ khoảng thời gian rảnh rỗi nào mà mình có."',
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
            CỦA HỌC VIÊN
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
