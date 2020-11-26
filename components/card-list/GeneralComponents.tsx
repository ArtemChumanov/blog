import React, { useEffect } from "react";
import { fetchPosts } from "../../redux/action";
import { connect } from "react-redux";
import { wrapper } from "../../redux/reducer";
import CardListItem from "../card-list-item/card-list-item";
import { ListCards } from "./card-list-styled";
export const getStaticProps = wrapper.getStaticProps(
  async ({ store, preview }) => {
    store.dispatch(fetchPosts());
  }
);
function GeneralComponent({ getPosts, post }) {
  useEffect(() => {
    async function Fetch() {
      await getPosts();
    }
    Fetch();
  }, []);
  return (
    <ListCards>
      {post &&
        post.map((item) => {
          const { id, ...itemprops } = item;
          return <CardListItem key={id} item={item} />;
        })}
    </ListCards>
  );
}
const mapStateToProps = (state) => ({
  post: state.post,
});
const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(fetchPosts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(GeneralComponent);
