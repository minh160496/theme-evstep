import {
  Box,
  Center,
  Container,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { BoxTest } from "../../components/BoxTest";

export const CertificateB1 = () => {
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
            Thông tin từ A-Z về kỳ thi cấp bằng B1 tiếng Anh năm 2023
          </Heading>
          <Text
            textAlign={"center"}
            size={"sm"}
            fontWeight={"bold"}
            color={"white"}
          >
            Trước khi đọc bài này bạn phải chắc chắn hiểu được VSTEP là gì, và
            chứng chỉ VSTEP dành cho ai, Vstep có thời hạn bao lâu ở Chứng chỉ
            VSTEP
          </Text>
        </Container>
      </Box>

      <Container maxW={"6xl"} py="46px">
        <BoxTest
          title="Kiểm tra trình độ A2, B1, B2 miễn phí"
          desc="Quà tặng trị giá 280K khi hoàn thành bài kiểm tra 15 phút"
          path="https://tienganhb1.com/KiemTraTrinhDo"
          label="Bắt đầu kiểm tra"
        />
        <SimpleGrid columns={{ base: 1, lg: 1 }} gap={"24px"}>
          <Box pt={"42px"}>
            <Heading size={"md"} pb={"12px"}>
              Bằng B1 tiếng Anh là gì?
            </Heading>
            <Box>
              <Text>
                Trước tiên, hãy xem bằng B1 tiếng Anh là gì? Bằng B1 tiếng Anh
                là chứng chỉ tiếng Anh B1 chứng nhận người sở hữu có trình độ
                tiếng Anh B1 theo khung châu Âu hoặc khung năng lực Ngoại ngữ 6
                bậc dành cho Việt Nam. ất, hồ sơ đăng ký dự thi, cách đăng ký dự
                thi trong link đi kèm.
              </Text>
            </Box>
          </Box>
          <Center pt={"42px"}>
            <Box>
              <Image
                src={`/chung-chi-b1.jpg`}
                alt="Chứng chỉ B1"
                width={400}
                height={500}
              />
              <Text textAlign={"center"} fontWeight={"bold"}>
                Chứng chỉ tại Vstep
              </Text>
            </Box>
          </Center>
        </SimpleGrid>
        <Box pt={"42px"}>
          <Heading size={"md"} pb={"12px"}>
            Hai loại chứng chỉ B1 tiếng Anh hay bằng B1 tiếng Anh
          </Heading>
          <Box>
            <Text>
              Có hai loại bằng B1 tiếng Anh phân theo đơn vị cấp bằng hoặc đối
              tượng cần bằng tiếng Anh B1.
            </Text>
            <Heading as={"h3"} size={"sm"} pb={"12px"}>
              Nếu chia theo đơn vị cấp thì có hai loại chứng chỉ hay bằng tiếng
              Anh B1
            </Heading>
            <Heading as={"h4"} size={"sm"} pb={"12px"}>
              Bằng tiếng Anh B1 hay chứng chỉ tiếng Anh B1 nội bộ của Bộ Giáo
              dục và Đào tạo
            </Heading>
            <Text>
              Đây là chứng chỉ do một số trường Đại học được Bộ Giáo Dục Đào tạo
              cho phép tổ chức thi và cấp bằng tiếng Anh theo khung năng lực
              Ngoại ngữ 6 bậc.
            </Text>
            <Heading as={"h4"} size={"sm"} pb={"12px"}>
              Chứng chỉ tiếng Anh B1 châu Âu/ quốc tế hay còn gọi là PET
            </Heading>
            <Text>
              Bằng B1 tiếng Anh châu Âu tương đương PET là kì thi bậc 3 theo
              khung tham chiếu chung châu Âu do trường Đại học Cambridge Anh
              cấp. Tại Việt Nam, Cambridge có nhiều đơn vị khảo thí trên cả
              nước.
            </Text>
            <Text>
              Càng đọc tiếp, bạn sẽ càng phân biệt được một số thuật ngữ hay bị
              nhầm lẫn về chứng chỉ B1. Trước đây (trước tháng 1 năm 2014), khi
              Bộ GD&ĐT chưa ban hành khung năng lực Ngoại Ngữ (NLNN) 6 bậc dùng
              cho Việt Nam thì B1 được thường được gọi là B1 theo khung tham
              chiếu chung châu Âu hay B1 châu Âu hay B1 quốc tế…Còn bây giờ có
              thêm 1 thuật ngữ nữa là B1 tương đương bậc 3 theo khung năng lực
              Ngoại Ngữ 6 bậc dùng cho Việt Nam, tương thích khung tham chiếu
              châu Âu. Vấn đề quan trọng là cần xác định mình cần B1 để làm gì
              hay chính là mình thuộc đối tượng nào sau đây nhé.
            </Text>

            <Heading as={"h3"} size={"sm"} pb={"12px"}>
              Nếu chia theo đối tượng cần bằng B1 tiếng Anh
            </Heading>
            <List>
              <ListItem>
                - Những ai chuẩn bị thi cao học buộc phải có chứng chỉ tiếng Anh
                B1 theo quy định kể từ năm 2021
              </ListItem>
              <ListItem>
                - Sinh viên không chuyên Tiếng Anh cần B1 tiếng Anh để được xét
                tốt nghiệp Đại học và Cao đẳng
              </ListItem>
              <ListItem>
                - Học sinh cấp 3 thi B1 để được miễn kì thi tiếng Anh tốt nghiệp
              </ListItem>
              <ListItem>
                - Một số ngành nghề yêu cầu có B1 mới được thi tuyển công chức
              </ListItem>
              <ListItem>- Định cư ở nước ngoài</ListItem>
            </List>
          </Box>
        </Box>

        <Box mt={"24px"}>
          <BoxTest
            title="Hãy tham gia cộng đồng luyện thi chứng chỉ tiếng Anh A2, B1, B2, C1 "
            desc="Nơi đây giảng viên của VIVIAN sẽ giải đáp cho bạn phương pháp học, tài liệu, đề thi mới nhất trên cả nước. "
            path=" https://www.facebook.com/groups/1675641029616069"
            label="Cộng đồng luyện thi VSTEP (A2, B1, B2, C1)"
          />
        </Box>
      </Container>
    </>
  );
};
