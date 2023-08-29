"use client";

import { BASE_URL_MEDIAS } from "@/CONST";
import { CardBlog } from "@/components/CardBlog";
import { Box, Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import xss from "xss";
import { SLiderPosts } from "./SliderPosts";

export const Posts = ({ posts }: { posts: any }) => {
  console.log(posts);
  return (
    <Box>
      <Box bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,46,46,0.835171568627451) 0%, rgba(255,179,0,1) 100%);">
        <Container maxW={"6xl"} py="60px">
          <Heading
            as="h2"
            textAlign={"center"}
            size={"lg"}
            pb="16px"
            color={"white"}
          >
            Tin tức EVstep
          </Heading>
        </Container>
      </Box>
      <Box mt={"32px"}>
        <SLiderPosts>
          {posts?.map((post: any, index: number) => (
            <SwiperSlide key={index}>
              {
                <CardBlog
                  key={index}
                  title={post?.title?.rendered}
                  desc={xss(post.excerpt.rendered)}
                  image=""
                  path={`/tin-tuc/${post?.slug}`}
                />
              }
            </SwiperSlide>
          ))}
        </SLiderPosts>
      </Box>

      <Divider size={"xl"} />
      <Container maxW={"6xl"}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={"32px"}>
          {posts?.map((post: any, index: number) => (
            <CardBlog
              key={index}
              title={post?.title?.rendered}
              desc={xss(post.excerpt.rendered)}
              image=""
              path={`/tin-tuc/${post?.slug}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
