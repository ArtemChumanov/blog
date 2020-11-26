import { MainLayout } from "../../components/main-layout/MainLayout";
import React from "react";
import PostDetail from "../../components/post-information/post-information";

export default function Post() {
  return (
    <MainLayout>
      <PostDetail post={null}/>
    </MainLayout>
  );
}

