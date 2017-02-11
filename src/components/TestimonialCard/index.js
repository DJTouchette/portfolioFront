import React from 'react';
import Card from './Card';

const TestimonialCardList = (props) => {
  const { list } = props;
  const cards = list.map((item) => (
    <div className="cardItem">
      <Card {...item} />
    </div>
  ));

  return (
    <div className={props.class}>
      {cards}
    </div>
  );
}


export default TestimonialCardList;
