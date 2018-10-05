import React, { Component } from "react";

export default class cardRecommend extends Component {
  render() {
    return (
      <div>
        <card>
          <img src={this.props.picture} className="card__recommend" />
        </card>

        <div className="card__descrecommed">
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}
