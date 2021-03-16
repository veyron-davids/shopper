import React, { useContext, useState, useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Card.scss";
import { CartContext } from "./cart.provider";
import { SERVER } from "./config";
import CurrentUserContext from "./context/current-user-context";
import "./Styles.css";

const Card = (props) => {
  const { addItem, clearItemFromCart } = useContext(CartContext);
  const currentUser = useContext(CurrentUserContext);
   const [Images, setImages] = useState([]);

  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };

  const server = SERVER + props.items.images

  console.log(server)

  // useEffect(() => {
  //   if (props.items.images && props.items.images.length > 0) {
  //     let images = [];
  //     props.items.images &&
  //       props.items.images.map((item) => {
  //         images.push(
  //           `http://localhost:3900/${item}`,
  //         );
  //       });
  //       setImages(images);
  //     }
  //   }, []);
    
  //   console.log(Images[0]);

  const Image = styled.div`
    height: 80%;
    width: 100%;
    background: url(${Images[0]}) no-repeat center center;
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
    &:hover {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  `;

  return (
    <div className="wrapper">
      <div className="container-img">
        <Link to={`/productPreview/${props.items._id}`}>
          <Image>
            {/* <img src={props.image} alt="" /> */}
          </Image>
        </Link>
        <div className={`bottom ${active ? "clicked" : ""}`}>
          <div className="left">
            <div className="details-one">
              <div className="name">{props.items.pname}</div>
              <div className="price">{`₦ ${props.items.price}`}</div>
            </div>
            {/* {currentUser && */}
            <div className="buy">
              <span
                className="basket-icon"
                onClick={() => {
                  addItem(props.items._id);
                  handleActive();
                }}
              >
                <HiOutlineShoppingCart
                // onClick={() => addItem(item)}
                />
              </span>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <i class="fa fa-check" aria-hidden="true"></i>
            </div>
            <div className="details-two card-details">
              <h1></h1>
              {/* {!currentUser ?
                <p>Please Login</p> : null
              } */}
            </div>
            <div className="remove">
              <i
                class="fa fa-times"
                aria-hidden="true"
                onClick={() => {
                  handleActive();
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <span>
            <AiOutlineInfoCircle />
          </span>
        </div>
        <div className="contents">{/* {pname} {category} */}</div>
      </div>
    </div>
  );
};

export default Card;
