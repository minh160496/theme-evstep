"use client";

import { CardSpecial } from "@/components/CardSpecial";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
  bg: string;
}

const Item = ({
  degree,
  step,
  pointOutput,
  pointInput,
  book,
  bg,
}: {
  degree: string;
  step: string;
  pointOutput: string;
  pointInput: string;
  book: string;
  bg: string;
}) => {
  return (
    <CardSpecial bg={bg} step={step}>
      <Box position="relative">
        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize="2xl">
            {pointOutput}
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="4xl" fontWeight="900">
              {degree}
            </Text>
          </HStack>
        </Box>
        <VStack bg={"gray.50"} py={4} borderBottomRadius={"xl"}>
          <List spacing={3} textAlign="start" px={4}>
            <ListItem fontSize={"sm"}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Điểm đầu vào: <strong>{`<${pointInput}`}</strong>
            </ListItem>
            <ListItem fontSize={"sm"}>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Giáo trình: <strong>{book}</strong>
            </ListItem>
          </List>
          <Box w="80%" pt={7}>
            <Button w="full" variant="outline" colorScheme="red">
              Xem lộ trình
            </Button>
          </Box>
        </VStack>
      </Box>
    </CardSpecial>
  );
};

const itels = [
  {
    degree: "A2",
    step: "Nền tảng",
    pointOutput: "3.5",
    pointInput: "3.5 (A0,A1)",
    book: "Skilful F và Skillful 1",
    bg: "purple",
  },
  {
    degree: "A2",
    step: "Nền tảng",
    pointOutput: "3.5",
    pointInput: "3.5 (A0,A1)",
    book: "Skilful F và Skillful 1",
    bg: "teal",
  },
  {
    degree: "A2",
    step: "Nền tảng",
    pointOutput: "3.5",
    pointInput: "3.5 (A0,A1)",
    book: "Skilful F và Skillful 1",
    bg: "orange",
  },
  {
    degree: "A2",
    step: "Nền tảng",
    pointOutput: "3.5",
    pointInput: "3.5 (A0,A1)",
    book: "Skilful F và Skillful 1",
    bg: "red",
  },
];

export const Itel = () => {
  return (
    <Box bg={"gray.50"}>
      <Container maxW={"6xl"}>
        <Box py={12}>
          <VStack spacing={2} textAlign="center">
            <Heading size={"lg"}>Học IELTS VớiGiáo Viên Bản Ngữ</Heading>
            <Text fontSize="sm" color={"gray.500"}>
              Khóa học IELTS với giáo viên bản ngữ được Marathon thiết kế độc
              quyền, xây dựng kiến thức nền tảng đến nâng cao, giúp học sinh làm
              quen chiến lược thi và rèn luyện các kĩ năng Nghe - Nói - Đọc -
              Viết hiệu quả.
            </Text>
          </VStack>
          <Stack
            direction={{ base: "column", md: "row" }}
            textAlign="center"
            justify="center"
            spacing={{ base: 4, lg: 10 }}
            py={10}
          >
            {itels.map((itel, index) => (
              <Item
                bg={itel.bg}
                key={index}
                degree={itel.degree}
                step={itel.step}
                pointInput={itel.pointInput}
                pointOutput={itel.pointOutput}
                book={itel.book}
              />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
