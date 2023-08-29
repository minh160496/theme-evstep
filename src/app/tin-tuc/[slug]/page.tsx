"server only";

import { Post } from "@/features/post";
import { getPost } from "../page";

export async function generateStaticParams() {
  const api_url =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://127.0.0.1/wordpress/wp-json/wp/v2";
  const posts = await fetch(`${api_url}/posts`, {
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const posts = await getPost();
  const post = posts.find((post: any) => post.slug === params.slug);

  return (
    <div>
      <Post post={post} />
    </div>
  );
};

export default Page;
