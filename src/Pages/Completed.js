import React from "react";
import styled from "styled-components";
import Contact from "../Components/ContactUs";
import PageHeader from "../Components/PageHeader";
import Card from "../Components/Card";
import Hero from "../Images/Hero.jpeg";

const HeadingDiv = styled.div`
  color: #000;
  font-size: 38px;
  font-family: ${(props) => props.theme.Fonts.Syne};
  font-weight: 700;
  position: relative;
  padding-left: 35px;
  max-width: 500px;
  margin-bottom: 40px;
  line-height: 55px;

  &:before {
    content: "Projects";
    color: #ff5538;
    font-size: 18px;
    font-family: ${(props) => props.theme.Fonts.Sans};
    font-weight: 700;
    position: absolute;
    top: 27px;
    left: -25px;
    transform: rotate(-90deg);
  }
`;

const Cardec = styled.section`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto 40px;
`;

const CardDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const Completed = () => {
  return (
    <>
     <PageHeader header="Project" />
     <Cardec>
        <HeadingDiv>
          Completed <br />
          <span style={{ color: "#FF5538" }}>Projects</span>
        </HeadingDiv>
        <CardDiv>
          <Card image={Hero} title="title" para="lorem shs hshsh hshsh hhshsh hshs  hhsh hhhs hh sh"/>
          <Card image={Hero} title="title" para="lorem shs hshsh hshsh hhshsh hshs  hhsh hhhs hh sh"/>
          <Card image={Hero} title="title" para="lorem shs hshsh hshsh hhshsh hshs  hhsh hhhs hh sh"/>
          <Card image={Hero} title="title" para="lorem shs hshsh hshsh hhshsh hshs  hhsh hhhs hh sh"/> 
          <Card image={Hero} title="title" para="lorem shs hshsh hshsh hhshsh hshs  hhsh hhhs hh sh"/>
          <Card image={Hero} title="title" para="lorem shs hshsh hshsh hhshsh hshs  hhsh hhhs hh sh"/>
        </CardDiv>
      </Cardec>

      <Contact />
    </>
  );
};

export default Completed;
