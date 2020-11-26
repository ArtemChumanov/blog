import React from "react";
import Link from "next/link";
import {
  Header,
  HeadingPrimary,
  HeadingPrimaryMain,
  HeadingPrimarySub,
  Li,
  Navigation,
  TextBox,
  TextBoxButton,
} from "./main-layout-styled";

export function MainLayout({ children }) {
  return (
    <>
      <Header>
        <Navigation>
        <Link href={"/"}>
          <Li>Home</Li>
        </Link>
      </Navigation>
        <TextBox>
          <HeadingPrimary>
            <HeadingPrimaryMain>Blog</HeadingPrimaryMain>
            <HeadingPrimarySub>share your story</HeadingPrimarySub>
          </HeadingPrimary>
          <Link href={"/create"}>
            <TextBoxButton>Create Story</TextBoxButton>
          </Link>

        </TextBox>
      </Header>
      <main>{children}</main>
    </>
  );
}
