"only server";

import { formatDate } from "@/ultil/date";
import xss from "xss";
import { SamePosts } from "./Sames";
import { Share } from "./Share";
import "./post.css";

export const Post = ({
  post,
  relatedPosts,
}: {
  post: any;
  relatedPosts: any[];
}) => {
  return (
    <article className="post">
      <div className="post--share">
        <Share url={post?.slug || "#"} />
      </div>
      <main>
        <div className="post__heading">
          <h1>{post.title.rendered}</h1>
          <span>{formatDate(post.date)}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: xss(post.content.rendered) }} />
        <SamePosts postsCat={relatedPosts} />
      </main>
    </article>
  );
};
