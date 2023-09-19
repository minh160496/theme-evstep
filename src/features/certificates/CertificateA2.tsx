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
import Link from "next/link";
import { BoxTest } from "../../components/BoxTest";

export const CertificateA2 = () => {
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
            Thông tin từ A đến Z thi chứng chỉ Tiếng anh A2 2023
          </Heading>
          <Text
            textAlign={"center"}
            size={"sm"}
            fontWeight={"bold"}
            color={"white"}
          >
            Chứng chỉ tiếng Anh A2 là gì? Có mấy loại đề thi chứng chỉ tiếng Anh
            A2? Các trường cấp bằng A2 tiếng Anh? Cấu trúc đề thi tiếng Anh A2
            ra sao? Tất cả các thắc mắc về chứng chỉ tiếng Anh A2 sẽ được giải
            đáp trong bài viết sau đây.
          </Text>
        </Container>
      </Box>

      <Container maxW={"6xl"} py="46px">
        <BoxTest
          title="Kiểm tra trình độ tiếng Anh A2 miễn phí"
          desc="Quà tặng trị giá 280K khi hoàn thành bài kiểm tra 15 phút"
          path="https://tienganhb1.com/KiemTraTrinhDo"
          label="Bắt đầu kiểm tra"
        />
        <Box pt={"42px"}>
          <Heading size={"md"} pb={"12px"}>
            Chứng chỉ tiếng Anh A2 là gì?
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 1 }} gap={"24px"}>
            <Text>
              Chứng chỉ tiếng Anh A2 là trình độ tiếng Anh bậc 2 theo khung năng
              lực ngoại ngữ 6 bậc dành cho Việt Nam hay khung tham chiếu châu Âu
              về ngôn ngữ. Bằng tiếng Anh A2do 14 trường được Bộ Giáo Dục và Đào
              tạo cho phép tổ chức thi hoặc chứng chỉ A2 tiếng Anh quốc tế do
              trường Đại học Cambridge Anh cấp. Xem ngay&nbsp; lịch thi chứng
              chỉ tiếng Anh A2, B1, B2, C1 của các trường thuộc Bộ bao gồm lịch
              thi gần nhất, hồ sơ đăng ký dự thi, cách đăng ký dự thi trong link
              đi kèm.
            </Text>

            <Center>
              <Box>
                <Image
                  src={`/van-bang1.jpg`}
                  alt="Văn bằng"
                  width={400}
                  height={500}
                />
                <Text textAlign={"center"} fontWeight={"bold"}>
                  Chứng chỉ ngoại ngữ A2 tại Vstep
                </Text>
              </Box>
            </Center>
          </SimpleGrid>
        </Box>
        <Box pt={"42px"}>
          <Heading size={"md"} pb={"12px"}>
            Trình độ tiếng Anh A2 là gì?
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 1 }} gap={"24px"}>
            <Text>
              Theo thông tư số <i>01/2014/TT-BGDĐT </i>về khung năng lực Ngoại
              ngữ 6 bậc dùng cho Việt Nam thì những người có trình độ tiếng Anh
              A2 có thể sử dụng được các cấu trúc câu được sử dụng thường xuyên
              liên quan đến nhu cầu giao tiếp cơ bản và có vốn từ vựng về những
              nhu cầu thiết yếu. Như vậy,&nbsp;so sánh trình độ A2 tiếng Anh với
              các chứng chỉ tiếng Anh quốc gia A, B, C cũ thì&nbsp;&nbsp;trình
              độ A2 tương đương trình độ B trước đây nhưng hiện tại Bộ Giáo dục
              không còn công nhận chứng chỉ A, B, C cũ mà thay thế bằng các
              chứng chỉ tiếng Anh A2, B1, B2
            </Text>
          </SimpleGrid>
        </Box>
        <Box pt={"42px"}>
          <Heading size={"md"} pb={"12px"}>
            Ai cần thi lấy chứng chỉ tiếng Anh A2?
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 1 }} gap={"24px"}>
            <List>
              <ListItem>
                Học sinh tốt nghiệp cấp 2 cần đạt trình độ tiếng Anh bậc 2
              </ListItem>
              <ListItem>
                Sinh viên một số trường Cao đẳng và Đại học có yêu cầu
              </ListItem>
              <ListItem>
                Thi công chức viên chức, nâng ngạch chuyển ngạch chuyên viên
              </ListItem>
            </List>
          </SimpleGrid>
        </Box>
        <Box pt={"42px"}>
          <Heading size={"md"} pb={"12px"}>
            03 dạng đề thi chứng chỉ A2 tiếng Anh cần biết?
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 1 }} gap={"24px"}>
            <Text>
              Hiện tại có 03 dạng đề thi tiếng Anh A2 khác nhau, vì vậy bạn xem
              mình thuộc đối tượng nào để ôn đúng cấu trúc đề thi của dạng đó.
              Cụ thể có đề thi tiếng Anh bậc 2 THCS, đề thi chứng chỉ tiếng Anh
              A2 tương đương tiếng Anh bậc 2 dành cho người lớn và đề thi chứng
              chỉ tiếng Anh A2 khung châu Âu của Cambridge English. Bạn hãy
              click vào link để xem định dạng bài thi chi tiết của mỗi đối
              tượng.
            </Text>
            <Link
              href={"https://vstep.edu.vn/de-thi-tieng-anh-a2-khung-chau-au"}
              style={{ textDecoration: "underline" }}
            >
              <Text color={"blue"} fontWeight={"bold"}>
                Đề thi tiếng Anh A2 châu Âu
              </Text>
            </Link>
          </SimpleGrid>
        </Box>
        <Box pt={"42px"}>
          <Heading size={"md"} pb={"12px"}>
            Đề thi tiếng Anh A2 do Bộ Giáo dục và Đào tạo ban hành
          </Heading>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"24px"}>
            <Box>
              <Box mt={"16px"}>
                <Heading as={"h3"} size={"sm"}>
                  Kỹ năng Nghe chứng chỉ tiếng Anh A2
                </Heading>
                <Text>
                  Phần 1, 2: Nghe thông báo, hướng dẫn, hội ngoại ngắn và trả
                  lời câu hỏi ABC
                </Text>
                <Text>
                  Phần 3 (5 câu): Nghe hội thoại điền từ vào chỗ trống
                </Text>
                <Text>
                  Phần 4 (5 câu): Nghe một đoạn hội thoại dài và chọn đáp án ABC
                </Text>
                <Text>
                  phần 5 (5 câu): Nghe một bài độc thoại điền từ vào chỗ trống
                </Text>
              </Box>
              <Box mt={"16px"}>
                <Heading as={"h3"} size={"sm"}>
                  Kỹ năng Đọc chứng chỉ A2 tiếng Anh
                </Heading>
                <Text>
                  Phần 1: Đọc một đoạn văn ngắn và chọn các từ vựng/ ngữ pháp
                  điền vào chỗ trống
                </Text>
                <Text>Phần 2: Đọc nối biển báo với các câu giải nghĩa</Text>
                <Text>Phần 3: Đọc điền từ vào một biểu mẫu</Text>
                <Text>Phần 4: Đọc hiểu trắc nghiệm ABC</Text>
              </Box>
              <Box mt={"16px"}>
                <Heading as={"h3"} size={"sm"}>
                  Kỹ năng Viết chứng chỉ tiếng Anh A2
                </Heading>
                <Text>Phần 1: hoàn thành 5 câu dựa vào các từ gợi ý</Text>
                <Text>Phần 2: Viết một tin nhắn/ bản ghi nhớ</Text>
                <Text>Phần 3: Viết một email/ postcard</Text>
              </Box>
              <Box mt={"16px"}>
                <Heading as={"h3"} size={"sm"}>
                  Kỹ năng Nói trong kỳ thi tiếng Anh A2
                </Heading>
                <Text>Phần 1: Chào hỏi</Text>
                <Text>Phần 2: Trả lời câu hỏi về các chủ đề quen thuộc</Text>
                <Text>
                  Phần 3: Miêu tả một một chủ đề (nhà cửa, quê quán, nghề
                  nghiệp...)
                </Text>
                <Text>
                  Phần 4: Thảo luận và đưa ý kiến về một nhận định/ câu nói
                </Text>
              </Box>
              <Box mt={"16px"}>
                <Heading as={"h3"} size={"sm"}>
                  Kỹ năng Nói trong kỳ thi tiếng Anh A2
                </Heading>
                <Text>
                  Để xem chi tiết đề thi và cách tính điểm, xem thêm tại&nbsp;
                </Text>
                <Link
                  href={
                    "https://vstep.edu.vn/de-thi-tieng-anh-a2-nguoi-lon-cua-bo-giao-duc"
                  }
                >
                  <Text
                    textDecoration={"underline"}
                    color={"blue"}
                    fontWeight={"bold"}
                  >
                    Đề thi tiếng Anh A2 của Bộ Giáo dục
                  </Text>
                </Link>
              </Box>
            </Box>
            <Box>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/QWnVRQCxR_M?si=R9Sg76v_0o99k3OB"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Box>
          </SimpleGrid>
          <Box mt={"16px"}>
            <Heading as={"h3"} size={"sm"}>
              Chứng chỉ tiếng Anh A2 có thời hạn bao lâu?
            </Heading>
            <Text>
              Trên chứng chỉ tiếng Anh A2 hay bằng tiếng Anh A2 châu Âu hay của
              Bộ Giáo dục đều không ghi thời hạn mà tùy thuộc vào đơn vị sử dụng
              yêu cầu.
            </Text>
          </Box>
          <Box mt={"16px"}>
            <Heading as={"h3"} size={"sm"}>
              Thi cấp chứng chỉ tiếng Anh A2/ bằng A2 tiếng Anh ở đâu và lệ phí
              thi bao nhiêu?
            </Heading>
            <Text>
              Chứng chỉ A2 tiếng Anh châu Âu của Cambridge do các trung tâm khảo
              thí ủy quyền ở các thành phố lớn tại Việt Nam tổ chức với lệ
              phí&nbsp; khoảng hơn 1 triệu đồng. Lệ phí thi chứng chỉ tiếng Anh
              A2 của Bộ GD&amp;ĐT do các đơn vị trường được Bộ cấp phép tổ chức
              thi quy định. Để biết thêm thông tin về kỳ thi tiếng Anh A2 gần
              nhất, lệ phí thi cụ thể của từng trường của Bộ, xem thêm
            </Text>
            <Link
              href="https://vstep.edu.vn/lich-thi-tieng-anh-a2-b1-b2"
              target="_blank"
              title="Lịch thi chứng chỉ tiếng Anh A2,B1,B2,C1"
            >
              <Text
                fontWeight={"bold"}
                textDecor={"underline"}
                color={"blue"}
                display={"inline"}
              >
                Lịch thi chứng chỉ tiếng Anh A2, B1, B2, C1 Vstep
              </Text>
            </Link>
            <Text>
              . Đến tháng 9/ 2020 có 14 trường tổ chức thi và cấp bằng tiếng Anh
              A2/ chứng chỉ tiếng Anh A2 gồm Đại học Ngoại ngữ Quốc Gia Hà Nọi,
              Đại học Sư phạm Hà Nội, Đại học Hà Nội, Đại học Thái Nguyên, Đại
              học Huế, Đại học Đà Nẵng, ĐH Sư phạm TpHCM, Đại học Sài Gòn, ĐH
              Trà Vinh, ĐH Cần Thơ...Phần lớn các trường tổ chức thi chứng chỉ
              tiếng Anh A2 trên máy tính và trường Đại học Ngoại Ngữ - Đại học
              Quốc Gia Hà Nội tổ chức hình thức thi trên giấy. Từ năm 2019, các
              trường thuộc Bộ tổ chức thi và chấp chứng chỉ tiếng Anh A2 theo
              mẫu chung có phôi của Bộ GD&amp;ĐT (màu đỏ).
            </Text>
            <Text>
              Nếu bạn còn cân nhắc giữa hình thức thi trên giấy hay trên máy,
              xem thêm
            </Text>
            <Link
              href="https://tienganhb1.com/so-sanh-thi-chung-chi-tieng-anh-a2-b1-b2-c1-tren-giay-va-tren-may-tinh"
              target="_blank"
              title="Thi chứng chỉ tiếng Anh A2 trên máy tính hay trên giấy"
            >
              <Text
                fontWeight={"bold"}
                textDecor={"underline"}
                color={"blue"}
                display={"inline"}
              >
                Thi chứng chỉ tiếng Anh A2 trên máy tính hay trên giấy
              </Text>
            </Link>
          </Box>

          <Box mt={"24px"}>
            <BoxTest
              title="Hãy tham gia cộng đồng luyện thi chứng chỉ tiếng Anh A2, B1, B2, C1 "
              desc="Nơi đây giảng viên của VIVIAN sẽ giải đáp cho bạn phương pháp học, tài liệu, đề thi mới nhất trên cả nước. "
              path="https://www.facebook.com/groups/vsteponline"
              label="Cộng đồng luyện thi VSTEP (A2, B1, B2, C1)"
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
