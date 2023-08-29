import { Container, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSize } from "../../hooks/useSizeWindow";

export const StyledContainer = styled(Container)`
  .mySwiper {
    padding-bottom: 38px;
  }
`;

export const Partner = () => {
  const { size } = useSize();

  const BASE_URL_MEDIAS =
    process.env.NEXT_PUBLIC_BASE_URL_MEDIAS ||
    "http://localhost/wordpress/wp-content/uploads/2023/08";

  const partners = [
    `${BASE_URL_MEDIAS}/viettel.png`,
    `${BASE_URL_MEDIAS}/vtv7.png`,
    `${BASE_URL_MEDIAS}/na.png`,
    `${BASE_URL_MEDIAS}/vn-ex.png`,
    `${BASE_URL_MEDIAS}/pana.png`,
  ];

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
