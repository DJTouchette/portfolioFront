import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const ProjectCard = (props) => {
  const { img, title, text, links } = props;
  const buttons = links.map((item) => {
    return (
      <a style={{ margin: '1%' }} href={item.href} target="_blank">
        <RaisedButton primary label={item.label} />
      </a>
    )
  });

  return (
    <Card>
      <CardMedia>
        <img src={img} />
      </CardMedia>
      <CardTitle title={title}  />
      <CardText  >
        {text}
      </CardText>
      <hr/>
      <CardActions>
      <div className="buttonContainer">
        {buttons}
      </div>
    </CardActions>
    </Card>
  );
}


export default ProjectCard;