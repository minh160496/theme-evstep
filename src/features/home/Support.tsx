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
    title: "Trải nghiệm môi trường học Online đầy cảm hứng",
    content:
      "Nhờ phương pháp RIPL đột phá hiệu quả. Học viên nghe giảng, làm bài, trao đổi tài liệu và thảo luận trực tiếp với giáo viên, bạn bè như đến tận lớp học Offline.",
  },
  {
    icon: <BiSupport />,
    title: "Đội ngũ tư vấn 24/7",
    content:
      "Đội ngũ tư vấn viên 24/7 luôn sẵn sàng giải đáp thắc mắc cho ba mẹ và các con",
  },
  {
    icon: <PiPiggyBankBold />,
    title: "Tiết kiệm chi phí và thời gian",
    content:
      "Lớp học online của Ms Hoa Junior với lộ trình cá nhân hóa giúp học viên tiết kiệm thời gian và chi phí.",
  },
  {
    icon: <SlCalender />,
    title: "Lịch học linh hoạt",
    content:
      "Lịch học được linh hoạt theo thời gian của học viên giúp các con không bỏ lỡ bất kì nội dung kiến thức nào.",
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
  const BASE_URL_MEDIAS =
    process.env.NEXT_PUBLIC_BASE_URL_MEDIAS ||
    "http://localhost/wordpress/wp-content/uploads/2023/08";

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
            src={`${BASE_URL_MEDIAS}/kethop.jpg`}
            alt="Kết hợp online và oflinet"
            width={600}
            height={400}
            style={{ borderRadius: "12px" }}
          />
        </GridItem>
        <GridItem>
          <Heading fontSize={"sm"} color={"red.500"} pb="16px">
            Tham gia Lớp học Online tại Ms Hoa Junior bạn sẽ được:
          </Heading>
          <AccSupport />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
