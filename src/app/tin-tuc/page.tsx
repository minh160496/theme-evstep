"only server";

import { Posts } from "@/features/posts";

export const getPost = async () => {
  const api_url =
    process.env.API_URL || "http://localhost/wordpress/wp-json/wp/v2";
  const res = await fetch(`${api_url}/posts`, { next: { revalidate: 10 } });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Page = async () => {
  const posts = await getPost();
  const news = posts?.filter((post: any) => post.type === "post");
  return (
    <div>
      <Posts posts={news} />
    </div>
  );
};

export default Page;
