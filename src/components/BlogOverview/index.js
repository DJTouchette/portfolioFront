import React from 'react';
import BlogCard from './BlogCard';
import CircularProgress from 'material-ui/CircularProgress';
import './BlogCard.css'

const BlogCardList = (props) => {
  const { data, handleClick } = props;
  const cards = !data.length > 0 ? <CircularProgress size={80} thickness={5} /> : data.map((post) => {
    return (
      <div style={{ maxWidth: '700px' }}>
        <BlogCard
          {...post}
          handleClick={handleClick.bind(null, post._id)}
        />
      </div>
    )
  });
  return (
    <div className="blog-card-container">
      {cards}
    </div>
  );
}


export default BlogCardList;
