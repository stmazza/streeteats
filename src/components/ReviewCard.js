import React from 'react';
import './css/Review.css';

function ReviewCard(props) {
  return(
    <div className="col-4 Review">
      <div className="card text-center mb-3r">
        <div className="card-header">
            { props.name }
        </div>
        <div className="card-body">
          <h5 className="card-title">{ props.headline }</h5>
          <p className="card-text">{ props.summary }</p>
          <p className="card-text">{ props.stars }</p>
          <a href="#" className="btn btn-warning">Full Review</a>
        </div>
        <div className="card-footer text-muted">
          { props.posted }
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
