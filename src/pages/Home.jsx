import React from "react";
import Background from "../components/Background";
import InfoCard from "../components/InfoCard";
import { HomeWrapper } from "../styles/Home.Styles";
import Post from '../components/Post'
import AboutCard from '../components/AboutCard'

const Home = () => {
  return (
    <HomeWrapper>
      <Background />
        <InfoCard />
        <Post />
        <AboutCard />
          
    </HomeWrapper>
  );
};

export default Home;
