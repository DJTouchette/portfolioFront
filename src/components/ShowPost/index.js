import React from 'react';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
// import Parser from 'html-react-parser';
import './ShowPost.css'
const ShowBlogCard = (props) => {
  const { content, title, heroImg, _id, handleClick } = props;

  return (
    <div className="show-post">
      <Card style={{ width: '100%' }}>
        { heroImg ?
          <CardMedia>
            <img alt={title} src={heroImg} />
          </CardMedia> : null
        }
          <Link to="/blog">
            <RaisedButton onClick={handleClick} primary label="< Back" />
          </Link>

        <CardTitle style={{ textAlign: 'center' }} title={title}  />
        <CardText  >
          <div className="blog-text">
            {Parser(content)}
          </div>
        </CardText>
      </Card>
    </div>
  );
}


export default ShowBlogCard;
