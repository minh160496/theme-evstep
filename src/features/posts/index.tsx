"use client";

import { CardBlog } from "@/components/CardBlog";
import { CardBlogVert } from "@/components/CardBlogVert";
import { LayoutBottom } from "@/layouts/layoutPosts/LayoutBottom";
import { formatDate } from "@/ultil/date";
import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";
import { SwiperSlide } from "swiper/react";
import xss from "xss";

const SLiderPosts = dynamic(() =>
  import("./SliderPosts").then((mod) => mod.SLiderPosts)
);

const StyledPaginate = styled(ReactPaginate)`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 5rem;

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
    margin-right: 4px;
    margin-left: 4px;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const Posts = ({
  posts,
  totalPosts,
}: {
  posts: any;
  totalPosts: string | null;
}) => {
  const router = useRouter();
  const len = totalPosts ? Math.ceil(Number(totalPosts) / 10) : 1;

  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/tin-tuc?page=${selected + 1}`);
  };

  return (
    <Box pb={"40px"}>
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
                  date={post?.date ? formatDate(post.date) : ""}
                  key={index}
                  title={post?.title?.rendered}
                  desc={xss(post.excerpt.rendered)}
                  image={post?.featured_image || ""}
                  path={`/tin-tuc/${post?.slug}`}
                />
              }
            </SwiperSlide>
          ))}
        </SLiderPosts>
      </Box>

      <Divider size={"xl"} />
      <Box pt={"32px"}>
        <LayoutBottom sticky="120px">
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
                  image={post?.featured_image || ""}
                  path={`/tin-tuc/${post?.slug}`}
                />
              ))}
            </VStack>
          </Box>

          <HStack pt={"32px"} justify={"center"}>
            <StyledPaginate
              previousLabel="<"
              nextLabel=">"
              pageCount={Math.round(len / 3)}
              onPageChange={handleRouter}
              pageRangeDisplayed={0}
            />
          </HStack>
        </LayoutBottom>
      </Box>
    </Box>
  );
};
