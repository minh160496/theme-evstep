import { CardBlog } from "@/components/CardBlog";
import {
  Button,
  Container,
  HStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

export const Event = ({ posts }: { posts: any[] }) => {
  return (
    <Container maxW={"6xl"} pb={"64px"}>
      <Heading textAlign={"center"} size={"lg"} pb="24px">
        Loạt tin tức HOT - đừng vội lướt qua!
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 3 }} gap={"24px"}>
        {posts?.map((post, index) => (
          <CardBlog
            key={index}
            image={post?.featured_image || ""}
            title={post.title?.rendered || ""}
            desc={post.excerpt?.rendered || ""}
            path={`/tin-tuc/${post.slug}`}
          />
        ))}
      </SimpleGrid>

      <HStack justify={"center"}>
        <Button
          as={Link}
          href={"/tin-tuc"}
          colorScheme="red"
          variant={"link"}
          fontSize={{ base: "md", md: "xl" }}
        >
          Xem tất cả
        </Button>
      </HStack>
    </Container>
  );
};
