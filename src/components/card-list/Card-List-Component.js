import { Component } from "react";
import Card from "../card/Card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monisters } = this.props;
    return (
      <div className="card-list">
        {monisters.map((monister) => {
          return <Card monister={monister} />;
        })}
      </div>
    );
  }
}

export default CardList;
