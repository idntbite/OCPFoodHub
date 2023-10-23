import React, { Component } from "react";
import "./Home.css";
import rest1 from "../resources/rest1.PNG";
import rest2 from "../resources/rest2.jpg";
import rest3 from "../resources/rest3.jpg";
import rest4 from "../resources/rest4.jpg";
import rest5 from "../resources/rest5.jpg";
import { Link, NavLink } from "react-router-dom";
import Form from "./Form.js";


const restaurants = [
  {
    name: 'Cercle, Benguerir',
    image: rest1,
    description: 'La réservation est recommandée pour le même jour.',
  },
  {
    name: 'Cercle, Youssoufia',
    image: rest2,
    description: 'La réservation est recommandée pour le même jour.',
  },
  {
    name: 'Club Equestre, Youssoufia',
    image: rest3,
    description: 'La réservation est recommandée pour le déjeuner (le jour précédent) et le dîner (le même jour).',
  },
  {
    name: 'Club Phosphatier, Benguerir',
    image: rest4,
    description: 'Réservation recommandée un jour à l\'avance (J-1).',
  },
  {
    name: 'Club Phosphatier, Youssoufia',
    image: rest5,
    description: 'Réservation recommandée un jour à l\'avance (J-1).',
  },
];

function LinkWrapper(props) {
  const { restaurant } = props;

  return (
    <NavLink to="/form" state={{ selectedRestaurant: restaurant }}>
      {props.children}
    </NavLink>
  );
}



class Home extends Component {
  render() {
    return (
        <div id="cards">
          {restaurants.map((restaurant, index) => (
            <div className="card" data-component={`card${index + 1}`} key={restaurant.name}>
              <LinkWrapper restaurant={restaurant}>
                <img src={restaurant.image} alt={restaurant.name} style={{ width: '100%' }} />
              </LinkWrapper>
              <div className="container1">
                <h4>
                  <b>{restaurant.name}</b>
                </h4>
                <p>{restaurant.description}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

export default Home;
