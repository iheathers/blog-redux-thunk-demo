import React from "react";
import { connect } from "react-redux";

import PostItem from "./PostItem";
import { fetchPostsAndUsers } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    //console.log(this.props.fetchPosts());
    this.props.fetchPostsAndUsers();
  }

  renderList = () => {
    return this.props.posts.map((post) => {
      return (
        <div key={post.id} className="item">
          <PostItem post={post} />
        </div>
      );
    });
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  //console.log(state.posts)
  return { posts: state.posts, user: state.user };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers,
})(PostList);
