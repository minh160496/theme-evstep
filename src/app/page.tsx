import { Home } from "@/features/home";

const getPost = async ({ page }: { page: string }) => {
  const api_url = process.env.NEXT_PUBLIC_API_URL || "";
  const res = await fetch(
    `${api_url}/posts?_embed&per_page=3&status=publish&page=${page}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const totalPosts = res.headers.get("X-WP-Total");
  const posts = await res?.json();

  const postsWithFeaturedImages: any[] = posts?.map((post: any) => {
    const featured_image =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

    return {
      ...post,
      featured_image,
    };
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return {
    posts: postsWithFeaturedImages,
    totalPosts,
  };
};

const HomePage = async () => {
  const { posts } = await getPost({ page: "1" });
  return <Home posts={posts} />;
};

export default HomePage;
