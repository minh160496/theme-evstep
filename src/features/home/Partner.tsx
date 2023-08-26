import { Container, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_URL_MEDIAS } from "../../CONST";
import { useSize } from "../../hooks/useSizeWindow";

const partners = [
  `${BASE_URL_MEDIAS}/viettel.png`,
  `${BASE_URL_MEDIAS}/vtv7.png`,
  `${BASE_URL_MEDIAS}/na.png`,
  `${BASE_URL_MEDIAS}/vn-ex.png`,
  `${BASE_URL_MEDIAS}/pana.png`,
];

export const StyledContainer = styled(Container)`
  .mySwiper {
    padding-bottom: 38px;
  }
`;

export const Partner = () => {
  const { size } = useSize();
  return (
    <StyledContainer maxW="6xl">
      <Heading size={"lg"} textAlign={"center"} pb={"24px"}>
        Đối tác của Evstep
      </Heading>
      <Swiper
        slidesPerView={(size.width < 480 && 3) || (size.width < 992 && 4) || 5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            {
              <Image
                width={200}
                height={150}
                src={partner}
                alt="Đối tác Evstep"
              />
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledContainer>
  );
};
