import React from 'react';
import Card from './Card';
import './Card.css';

const ProjectCardList = (props) => {
  const { list } = props;
  const cards = list.map((item) => (
    <div className="cardItem">
      <Card {...item} />
    </div>
  ));

  return (
    <div className="cardContainer">
      {cards}
    </div>
  );
}


export default ProjectCardList;