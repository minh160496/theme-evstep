"only server";

import xss from "xss";
import "./post.css";
import { PostContainer } from "./PostContainer";

export const Post = ({ post }: { post: any }) => {
  console.log(post);
  return (
    <article className="post">
      <PostContainer>
        <h1 className="post__heading">{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: xss(post.content.rendered) }} />
      </PostContainer>
    </article>
  );
};
