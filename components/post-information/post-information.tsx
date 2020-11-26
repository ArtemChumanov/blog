import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../main-layout/MainLayout";
import Link from "next/link";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";
import { TextContainer, TitleH } from "./post-information-styled";

interface PostPageProp {
  post: MyPost;
}
interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}
export default function PostDetail({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();
  useEffect(() => {
    async function load() {
      const res = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
      const data = await res.json();
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);
  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  return (
    <>
      <TitleH>{post.title}</TitleH>
      <hr />
      <TextContainer>
        <p>{post.description}</p>
        <Link href={"/"}>
          <a>Back to posts</a>
        </Link>
      </TextContainer>
    </>
  );
}
export async function getServerSideProps({ query, req }: PostNextPageContext) {
  if (!req) {
    return { post: null };
  }
  const res = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post = await res.json();
  return { props: { post } };
}
