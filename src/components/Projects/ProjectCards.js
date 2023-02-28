import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsFillEyeFill } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="card-image">
        <img src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.link && (
          <Button
            variant="primary"
            href={props.link}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsFillEyeFill /> View
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
