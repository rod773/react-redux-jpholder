import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/postsActions";
import { logInUser } from "../store/actions/userActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.logInUser();
  }

  render() {
    const { posts, loading, error } = this.props;

    return (
      <div>
        {loading && <div>LOADING...</div>}
        {error && <div>{error}</div>}
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { posts, loading, error } = state.posts;
  const test = state.users;
  console.log(test);
  return {
    posts,
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  fetchPosts,
  logInUser,
})(Posts);
