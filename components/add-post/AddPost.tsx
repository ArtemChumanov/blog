import React from "react";
import { ButtonAdd, Input, Textarea } from "./add-post-styled";
import { TitleH } from "../post-information/post-information-styled";
import { connect } from "react-redux";
import { AddNewPost } from "../../redux/action";

const AddPost = ({ dispatch }) => {
  let input1, input2;
  return (
    <div>
      <TitleH>Create New Story for blog</TitleH>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input1.value.trim() || !input2.value.trim()) {
            return;
          }
          dispatch(AddNewPost(input1.value, input2.value));
          input1.value = "";
          input2.value = "";
        }}
      >
        <Input
          type={"text"}
          ref={(node) => (input1 = node)}
          placeholder={"Enter topic"}
        />
        <Textarea
          placeholder={"Enter your story"}
          ref={(node) => (input2 = node)}
        />
        <ButtonAdd>Create Story</ButtonAdd>
      </form>
    </div>
  );
};
export default connect()(AddPost);
