import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const bannerImages = ["/banner-1.jpg", "/banner-2.png", "/banner-3.png"];

export const Banner = () => {
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
                style={{ marginRight: "auto", marginLeft: "auto" }}
                src={`${image}`}
                alt="image"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
