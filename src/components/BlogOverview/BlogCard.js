import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import Parser from 'html-react-parser';

const BlogCard = (props) => {
  const { content, title, heroImg, _id, handleClick } = props;

  return (
    <Card>
      { heroImg ?
        <CardMedia>
          <img alt={title} src={heroImg} />
        </CardMedia> : null
      }
      <CardTitle className="blog-title" style={{ fontSize: '40px'  }} title={title}  />
      <CardText>
        <div>
          {Parser(content.substring(0,100)+'...')}
        </div>
      </CardText>
      <hr/>
      <CardActions style={{textAlign: 'center'}}>
          <Link to={`/blog/${_id}`}>
            <RaisedButton onClick={handleClick} primary label="View More" />
          </Link>
      </CardActions>
    </Card>
  );
}


export default BlogCard;
