import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import Parser from 'html-react-parser';

const BlogCard = (props) => {
  const { content, title, heroImg, _id } = props;

  return (
    <Card>
      { heroImg ?
        <CardMedia>
          <img alt={title} src={heroImg} />
        </CardMedia> : null
      }
      <CardTitle title={title}  />
      <CardText  >
        {Parser(content)}
      </CardText>
      <hr/>
      <CardActions>
        <Link to={`/blog/${_id}`} style={{ margin: '1%' }} >
          <RaisedButton primary label="View More" />
        </Link>
      </CardActions>
    </Card>
  );
}


export default BlogCard;
