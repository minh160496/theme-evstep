import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const bannerImages = ["/banner-1.jpg", "/banner-2.png", "/banner-3.png"];

export const Banner = () => {
  const BASE_URL_MEDIAS =
    process.env.NEXT_PUBLIC_BASE_URL_MEDIAS ||
    "http://localhost/wordpress/wp-content/uploads/2023/08";

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Link href="#">
              <Image
                width={1920}
                height={600}
                src={`${BASE_URL_MEDIAS}${image}`}
                alt="image"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
