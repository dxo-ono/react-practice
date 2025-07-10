import React from "react";
import KeyVisual from "../components/Keyvisual";
import PickupSection from "../components/PickupSection";
import Cards from "../components/Cards";
import Button from "../components/Button";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black px-4">
      <KeyVisual />
      <PickupSection />
      <Cards />
      <Button />
    </div>
  );
};


export default Home;