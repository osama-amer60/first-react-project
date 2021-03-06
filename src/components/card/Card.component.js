import { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monister;

    return (
      <div className="card-container" key={id}>
        <img
          alt={`monister ${name}`}
          src={`https://robohash.org/${id}?set=set2`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
