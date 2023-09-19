import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { GiSpookyHouse } from "react-icons/gi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiPiggyBankBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

const accSupport = [
  {
    icon: <GiSpookyHouse />,
    title: "Trải nghiệm mô hình lớp học ảo 4.0",
    content:
      "=> Hệ thống đào tạo trực tuyến MLS thông minh giúp cho việc học tập, theo dõi lộ trình cùng với đó tăng cường sự kết nối giữa học viên và giảng viên trong suốt quá trình học.",
  },
  {
    icon: <BiSupport />,
    title: "Đội ngũ tư vấn hỗ trợ 24/7",
    content:
      "Đội ngũ tư vấn viên 24/7 luôn sẵn sàng giải đáp thắc mắc cho ba mẹ và các con",
  },
  {
    icon: <PiPiggyBankBold />,
    title: "Tiết kiệm chi phí và thời gian",
    content:
      "Việc học trực tuyến 100% giúp bạn tiết kiệm tối đa thời gian và chi phí so với việc học tập và ôn luyện tại trung tâm.",
  },
  {
    icon: <SlCalender />,
    title: "Thời gian học tập linh hoạt",
    content:
      "Lịch học được linh hoạt theo thời gian của học viên giúp bạn vừa đảm bảo được giữa mục tiêu đề ra vừa không ảnh hưởng quá nhiều tới công việc và sinh hoạt hàng ngày.",
  },
  {
    icon: <MdOutlineLocalShipping />,
    title: "Freeship Giáo trình và học liệu",
    content:
      "Được nhận giáo trình và tài liệu học đầy đủ từ Ms Hoa Junior mà không mất phí ship",
  },
];

export const AccSupport = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accSupport.map((acc, index) => (
        <AccordionItem border={"none"} key={index} py={"12px"}>
          <AccordionButton bg={"gray.50"} py="16px" rounded={"md"}>
            <Box flex="1" textAlign="left">
              <HStack>
                {acc.icon}
                <Heading fontSize={{ base: "sm", md: "md" }} color={"gray.600"}>
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>{acc.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const Support = () => {
  return (
    <Container maxW={"6xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"36px"}>
        <GridItem>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            align={"center"}
            pb="24px"
            gap={"6px"}
          >
            <Heading fontSize={"2xl"}>HỌC LINH HOẠT GIỮA</Heading>
            <Heading fontSize={"2xl"} color={"red.500"}>
              ONLINE VÀ OFFLINE
            </Heading>
          </Flex>
          <Image
            src={`/kethop.jpg`}
            alt="Kết hợp online và oflinet"
            width={600}
            height={400}
            style={{ borderRadius: "12px" }}
          />
        </GridItem>
        <GridItem>
          <Heading fontSize={"sm"} color={"red.500"} pb="16px">
            Lợi ích bạn nhận được khi tham gia ôn luyện Online tại Vstep.EDU.VN
          </Heading>
          <AccSupport />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
