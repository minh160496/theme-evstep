"use client";

import { CardBlog } from "@/components/CardBlog";
import { CardBlogVert } from "@/components/CardBlogVert";
import { Box, Container, Divider, Heading, VStack } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/react";
import xss from "xss";
import { LayoutBottom } from "@/layouts/layoutPosts/LayoutBottom";
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
      <Box pt={"32px"}>
        <LayoutBottom>
          <Box>
            <Heading
              size={"lg"}
              pb={"20px"}
              textAlign={{ base: "center", lg: "start" }}
            >
              Tin tức
            </Heading>
            <VStack spacing={"16px"}>
              {posts.map((post: any, index: number) => (
                <CardBlogVert
                  key={index}
                  title={post?.title?.rendered}
                  desc={xss(post.excerpt.rendered)}
                  tag="new"
                  image=""
                  path={`/tin-tuc/${post?.slug}`}
                />
              ))}
            </VStack>
          </Box>
        </LayoutBottom>
      </Box>
    </Box>
  );
};
