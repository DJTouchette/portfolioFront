import React from 'react';
import beginingQuote from '../../assets/images/beginingQuote.png';

const ProjectCard = (props) => {
  const { img, title, text, cssClass } = props;

  return (
      <a href="https://www.upwork.com/fl/damientouchette">
        <div className={ cssClass? cssClass : 'testimonialCard'}>
          <div style={{ border: '3px solid #2c5591' }} className="card testimonial-card">
            <div className="card-up testiomicalColor">
            </div>
            <div className="avatar"><img src={img} className="rounded-circle img-responsive" />
            </div>
            <div className="card-block testimonial-text">
                <h4 className="card-title">{title}</h4>
                <hr/>
                <p><i className="fa fa-quote-left"></i> {text} <i className="fa fa-quote-right"></i></p>
            </div>
          </div>
        </div>
      </a>
  );
}


export default ProjectCard;
