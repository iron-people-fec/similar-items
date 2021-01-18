import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const SimilarItemsListEntry = (props) => {

  const displayRating = () => {
    if (props.product.rating) {
      return (
        <ReviewDiv>
          <span> {props.product.rating}</span>
          <span className='count'> ({props.product.reviewCount})</span>
        </ReviewDiv>
      );
    } else {
      return (
        <ReviewDiv> No Reviews Yet</ReviewDiv>
      );
    }
  };

  return (
    <EntryDiv scrollAnimation={props.scrollAnimation}>
      <ProductImg imageUrl={props.product.imageUrl}><HeartImage></HeartImage></ProductImg>
      <StarDiv></StarDiv>
      {displayRating()}
      <div>{props.product.name}</div>
      <div><b>${props.product.price}</b></div>
    </EntryDiv>
  );
};

export default SimilarItemsListEntry;



const StarDiv = styled.div`
background-image: url('https://carousel-media.s3.us-east-2.amazonaws.com/carousel-media/Screen+Shot+2021-01-15+at+2.35.47+PM.png');
background-repeat: no-repeat;
background-position: center;
width: 15px;
height: 15px;
display: inline-block;
margin-bottom: 10px;
`;

const ReviewDiv = styled.div`
font-size: 12px;
display: inline;
position: relative;
bottom: 12px;

.count {
  color: grey;
}
`;

const HeartImage = styled.div`
width: 25px;
height: 25px;
float: right;
background-image: url('https://smallimg.pngkey.com/png/small/377-3778885_jewelry-icon-heart-black-love-emblem-small-heart.png');
background-repeat: no-repeat;
background-position: center;
background-size: 100% 100%;
`;

const ProductImg = styled.div`
background-image: url(${props => props.imageUrl});
background-repeat: no-repeat;
background-position: center;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,.03);
border-radius: 15px;
border-size: 5px;
margin-top: 10px;
margin-bottom: 10px;
height: 80%;
background-size: 100% 100%;
`;

const EntryDiv = styled.div`

  @keyframes right0 {
    from {left: 0%;}
    to {left: -400%;}
  }

  @keyframes right1 {
    from {left: -400%;}
    to {left: -800%;}
  }

  @keyframes right2 {
    from {left: -800%;}
    to {left: -1200%;}
  }

  @keyframes right3 {
    from {left: -1200%;}
    to {left: 0%;}
  }

  @keyframes left0 {
    from {left: 0%;}
    to {left: -1200%;}
  }

  @keyframes left1 {
    from {left: -400%;}
    to {left: 0%;}
  }

  @keyframes left2 {
    from {left: -800%;}
    to {left: -400%;}
  }

  @keyframes left3 {
    from {left: -1200%;}
    to {left: -800%;}
  }

  height: 80%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  font-family: Helvetica;
  font-weight: 100;
  position: relative;
  animation: ${props => props.scrollAnimation} 1s 1 forwards;
  `;