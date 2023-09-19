import { BoxTest } from "@/components/BoxTest";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export const Frames = () => {
  return (
    <>
      <Box bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,46,46,0.835171568627451) 0%, rgba(255,179,0,1) 100%);">
        <Container maxW={"6xl"} py="120px">
          <Heading
            as="h2"
            textAlign={"center"}
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            Thông tin năng lực
          </Heading>
          <Text
            textAlign={"center"}
            size={"sm"}
            fontWeight={"bold"}
            color={"white"}
          ></Text>
        </Container>
      </Box>
      <Box>
        <Container maxW={"6xl"} py="120px">
          <BoxTest
            title="Kiểm tra trình độ A2, B1, B2 miễn phí"
            desc="Quà tặng trị giá 280K khi hoàn thành bài kiểm tra 15 phút"
            label="Bắt đầu kiểm tra"
            path="/"
          />
        </Container>
      </Box>
    </>
  );
};
