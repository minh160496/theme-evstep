import {
  Box,
  Button,
  FormControl,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
interface IForm {
  title?: string;
}

export const FormContact = (props: IForm) => {
  const { title } = props;
  return (
    <Box
      bg={"gray.100"}
      rounded={"xl"}
      px={"24px"}
      py={"24px"}
      h={"max-content"}
    >
      <Heading as={"h2"} size={"md"} textAlign={"center"} pb={"24px"}>
        {title || "Tư vấn lộ trình học và ưu đãi"}
      </Heading>
      <VStack spacing={"12px"}>
        <FormControl isRequired>
          <Input
            bg={"white"}
            type="text"
            name="name"
            placeholder="Nhập họ tên bạn..."
          />
        </FormControl>
        <HStack spacing={"8px"} justify={"space-between"} w={"full"}>
          <FormControl flex={1}>
            <Input bg={"white"} type="email" placeholder="Nhập email..." />
          </FormControl>
          <FormControl isRequired flex={1}>
            <Input
              bg={"white"}
              type="tel"
              placeholder="Nhập số điện thoại..."
            />
          </FormControl>
        </HStack>
        <FormControl isRequired>
          <Input
            bg={"white"}
            type="text"
            name="name-child"
            placeholder="Nhập họ tên con bạn..."
          />
        </FormControl>

        <HStack spacing={"8px"} justify={"space-between"} w={"full"}>
          <FormControl>
            <Input bg={"white"} type="text" placeholder="Nhận lớp con học..." />
          </FormControl>
          <FormControl>
            <Select bg={"white"} placeholder="Chọn khóa học">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
            </Select>
          </FormControl>
        </HStack>
        <FormControl>
          <Select bg={"white"} placeholder="Chọn cơ sở gần bạn">
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>

        <Button colorScheme="red" w={"full"} mt={"24px"}>
          Giữ chỗ ngay
        </Button>

        <Text fontSize={".7rem"} fontWeight={"bold"}>
          * Vui lòng để ý điện thoại, chúng tôi sẽ liên hệ bạn sớm (trong vòng
          24h)
        </Text>
      </VStack>
    </Box>
  );
};
