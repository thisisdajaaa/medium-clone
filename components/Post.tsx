import React, { FC } from "react";
import Link from "next/link";
import { urlFor } from "../sanity";
import { Post } from "../typings";

type Props = {
  post: Post;
};

const Post: FC<Props> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <div className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border">
        <div className="overflow-hidden">
          <img
            className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
            src={urlFor(post.mainImage).url()!}
            alt=""
          />
        </div>
        <div className="flex justify-between bg-white p-5">
          <div>
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-xs">
              {post.description} by {post.author.name}
            </p>
          </div>

          <img
            className="h-12 w-12 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default Post;
