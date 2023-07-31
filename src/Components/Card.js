import React from "react";
import styled from "styled-components";

const MainCard = styled.div`
  width: 20.8125rem;
  height: 25.75rem;
  padding: 2rem;
  border-radius: 0.9375rem;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  margin: 0 0 2rem 0 ;
`;

const CardImg = styled.img`
  width: 17.5rem;
  height: 12.3125rem;
`;

const CardHeader = styled.h1`
  color: #000;
  font-family: Jost;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 2rem 0 1rem 0;
`;

const CardPara = styled.h1`
  color: rgba(0, 0, 0, 0.7);
  text-align: justify;
  font-family: Jost;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 1.6rem */
  letter-spacing: 0.04rem;
`;

const Card = (props) => {
  return (
    <MainCard>
      <CardImg src={props.image} />
      <CardHeader>{props.title}</CardHeader>
      <CardPara>{props.para}</CardPara>
    </MainCard>
  );
};

export default Card;
