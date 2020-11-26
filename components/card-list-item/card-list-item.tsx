import React from "react";
import Link from "next/link";
import {
  Card,
  Title,
  Text,
  Button,
  CardTextContent,
} from "./card-list-item-styled";
const CardListItem = ({ item }) => {
  return (
    <Card>
      <CardTextContent>
        <Title>{item.title}</Title>
        <Text>{item.shortInfo}</Text>
        <Link href={"post/[id]"} as={`post/${item.id}`}>
          <Button>Read more ...</Button>
        </Link>
      </CardTextContent>
    </Card>
  );
};
export default CardListItem;
