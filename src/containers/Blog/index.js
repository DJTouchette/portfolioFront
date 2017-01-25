import React, { Component } from 'react';
import initiateSocket from '../../sockets/index';
import { socket } from '../../sockets/index';
import BlogCardList from '../../components/BlogOverview/index';
import ShowPost from '../../components/ShowPost/index';
import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      show: null,
    };
  }

  componentWillMount() {
    const { postID } = this.props.router.params;
    const socket = initiateSocket(this);
    if (postID) return socket.emit('Post:Get', postID);

    socket.emit('Post:GetAll');
  }

  handleClick = (id) => {
    if (typeof(id) === 'string') return socket.emit('Post:Get', id);

    socket.emit('Post:GetAll');
  }

  render() {
    if (this.state.show) {
      return (
        <div>
          <div className="bg"></div>
          <ShowPost handleClick={this.handleClick} {...this.state.show}/>
        </div>
      )
    }
    return (
      <div id="blog">
        <div className="bg"></div>
        <div className="">
          <BlogCardList
            data={this.state.posts}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default Blog;
