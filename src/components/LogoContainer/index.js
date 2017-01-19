import React from 'react';
import './LogoContainer.css';

const LogoContainer = (props) => {
  const { list } = props;

  const logos = list.map((item) => {
    return (
      <div className="logoItem">
        <img src={item.icon} />
        <div className="textLogo">
          <p>{item.name}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="logoContainer">
      {logos}
    </div>
  )
};

export default LogoContainer;