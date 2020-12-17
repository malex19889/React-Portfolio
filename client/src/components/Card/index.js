import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
const index = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
    </Card.Text>
        <Button variant="primary" href={props.href}>Details</Button>
      </Card.Body>
    </Card>
  )
}

export default index
