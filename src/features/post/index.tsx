"only server";

import xss from "xss";
import "./post.css";
import { SamePosts } from "./Sames";

export const Post = ({
  post,
  relatedPosts,
}: {
  post: any;
  relatedPosts: any[];
}) => {
  return (
    <article className="post">
      <h1 className="post__heading">{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: xss(post.content.rendered) }} />
      <SamePosts postsCat={relatedPosts} />
    </article>
  );
};
