import React, { Component } from "react";
import {
  Container,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardText
} from "reactstrap";

import "../recommend/style-recommend.css";

export default class Recommend extends Component {
  render() {
    return (
      <Container className="recommend__block">
        <h3 className="headtext">Recommended Menu</h3>
        <CardGroup>
          <Card className="card">
            <CardImg src="img/carousel_1.jpg" className="card__img" />
            <CardBody>
              <CardText>spaghetti salmon steak</CardText>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg src="img/carousel_1.jpg" className="card__img" />
            <CardBody>
              <CardText>spaghetti salmon steak</CardText>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg src="img/carousel_1.jpg" className="card__img" />
            <CardBody>
              <CardText>spaghetti salmon steak</CardText>
            </CardBody>
          </Card>
          <Card className="card">
            <CardImg src="img/carousel_1.jpg" className="card__img" />
            <CardBody>
              <CardText>spaghetti salmon steak</CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    );
  }
}
