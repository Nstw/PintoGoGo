import React, { Component } from "react";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardText
} from "reactstrap";

import Cardrecommend from "../cardrecommend/cardrecommend";
import "../recommend/style-recommend.css";

export default class Recommend extends Component {
  render() {
    return (
      <Container className="recommend__block" fluid>
        <h3 className="headtext">Recommended Menu</h3>
        <Row className="justify-content-center">
          <CardGroup className="cardgroup__recommend">
            <Card className="card__recommend mr-3">
              <CardImg
                src="\img\foodRecomend\ข้าวหมูอบ.jpg"
                className="cardimg__recommend"
              />
              <CardBody>
                <CardText>spaghetti salmon steak</CardText>
              </CardBody>
            </Card>
            <Card className="card__recommend ml-3 mr-3">
              <CardImg
                src="img\foodRecomend\แซลมอนย่างเกลือ.jpg"
                className="cardimg__recommend"
              />
              <CardBody>
                <CardText>spaghetti salmon steak</CardText>
              </CardBody>
            </Card>
            <Card className="card__recommend ml-3 mr-3">
              <CardImg
                src="img\foodRecomend\บะหมี่ผักหมูหวาน.jpg"
                className="cardimg__recommend"
              />
              <CardBody>
                <CardText>spaghetti salmon steak</CardText>
              </CardBody>
            </Card>
            <Card className="card__recommend ml-3">
              <CardImg
                src="img\foodRecomend\ข้าวกะเพราหมูสับ.jpg"
                className="cardimg__recommend"
              />
              <CardBody>
                <CardText>spaghetti salmon steak</CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    );
  }
}
