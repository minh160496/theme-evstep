import { CardBlog } from "@/components/CardBlog";
import {
  Button,
  Container,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

export const Event = () => {
  const events = [
    {
      image: `/blog.jpg`,
      path: "#",
      title:
        "Phát động cuộc thi: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” dành cho tất cả học viên JUNIOR trên toàn quốc",
      desc: "PHÁT ĐỘNG CUỘC THI: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” DÀNH CHO TẤT CẢ HỌC VIÊN JUNIOR TRÊN TOÀN QUỐC. Cuộc thi nằm trong chuỗi hoạt động hưởng ứng mùa Back To School và chia sẻ giá trị của bộ sách FUTURE của Ms Hoa Junior.",
    },
    {
      image: `/blog.jpg`,
      path: "#",
      title:
        "Phát động cuộc thi: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” dành cho tất cả học viên JUNIOR trên toàn quốc",
      desc: "PHÁT ĐỘNG CUỘC THI: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” DÀNH CHO TẤT CẢ HỌC VIÊN JUNIOR TRÊN TOÀN QUỐC. Cuộc thi nằm trong chuỗi hoạt động hưởng ứng mùa Back To School và chia sẻ giá trị của bộ sách FUTURE của Ms Hoa Junior.",
    },
    {
      image: `/blog.jpg`,
      path: "#",
      title:
        "Phát động cuộc thi: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” dành cho tất cả học viên JUNIOR trên toàn quốc",
      desc: "PHÁT ĐỘNG CUỘC THI: “MỞ TRANG SÁCH - VẠN ĐIỀU HAY” DÀNH CHO TẤT CẢ HỌC VIÊN JUNIOR TRÊN TOÀN QUỐC. Cuộc thi nằm trong chuỗi hoạt động hưởng ứng mùa Back To School và chia sẻ giá trị của bộ sách FUTURE của Ms Hoa Junior.",
    },
  ];

  return (
    <Container maxW={"6xl"} pb={"64px"}>
      <Heading textAlign={"center"} size={"lg"} pb="24px">
        Loạt sự kiện HOT - đừng vội lướt qua!
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} gap={"24px"}>
        {events.map((event, index) => (
          <CardBlog
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
