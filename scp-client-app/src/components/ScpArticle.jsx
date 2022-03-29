import { useState, useEffect } from 'react';

import {
  Button,
  Row,
  Col,
} from 'react-bootstrap';

const ScpArticle = ({subject}) => {
  const [ratingCount, setRatingCount] = useState(parseInt(subject.rating));

  const handleDecreaseRatingClick = () => {
    setRatingCount(ratingCount - 1);
  }

  const handleIncreaseRatingClick = () => {
    setRatingCount(ratingCount + 1);
  }

  useEffect(() => {
    // save the rating value to the database when it updates using a PUT request to the api
    fetch(`/api/scps/${subject.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({rating: ratingCount})
      }
    )
  }, [ratingCount]);
  return (
    <>
      <Row className='mt-5'>
        <Col>
          <h3 className='mt-3'>{subject.item}</h3>
          <h4 className='mt-4'>{subject.name}</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <div className='mt-3'>
            <h6>Rating</h6>
            <Button variant='primary' onClick={handleDecreaseRatingClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
            </Button>
            <span className='px-3'>{ratingCount}</span>
            <Button variant='primary' onClick={handleIncreaseRatingClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </Button>
          </div>
        </Col>
        
      </Row>
      <Row className='mt-md-5 pb-3'>
        <Col xs={12} md={6} className="order-md-last mb-4">
          {subject.image_filename &&
            <img
              className='img-fluid rounded shadow-sm d-block mx-auto'
              src={`/images/${subject.image_filename}`}
              alt={subject.image_caption ? subject.image_caption : subject.item}
              title={subject.item}
            />
          }
          {subject.image_caption &&
            <p className='mt-2 text-center fw-bold'>{subject.image_caption}</p>
          }
        </Col>
        <Col xs={12} md={6}>
          <h6><strong>Item #: </strong>{subject.item}</h6>
          <h6><strong>Object Class: </strong>{subject.object_class}</h6>
          <h6 className='mt-4'><strong>Special Containment Procedures:</strong></h6>
          <p>{subject.containment_procedures}</p>
          <h6><strong>Description:</strong></h6>
          <p className='mb-5'>{subject.description}</p>
        </Col>
      </Row>
    </>
  );
}
 
export default ScpArticle;