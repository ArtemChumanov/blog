import { MainLayout } from "../components/main-layout/MainLayout";
import React from "react";
import AddPost from "../components/add-post/AddPost";

export default function Create() {
  return (
    <MainLayout>
      <AddPost />
    </MainLayout>
  );
}
