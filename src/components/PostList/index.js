import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../../actions";
import UserHeader from "../UserHeader";

export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <div className="header">{post.title}</div>
            <div className="description">{post.body}</div>
            <UserHeader userId={post.userId}></UserHeader>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
