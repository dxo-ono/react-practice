import React from "react";
import KeyVisual from "../components/Keyvisual";
import PickupSection from "../components/PickupSection";
import Cards from "../components/Cards";
import Buttons from "../components/Buttons";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <KeyVisual />
      <PickupSection />
      <Cards />
      <Buttons />
    </div>
  );
};

export default Home;
