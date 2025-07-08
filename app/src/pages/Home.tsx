import React from "react";
import KeyVisual from "../components/Keyvisual";
import PickupSection from '../components/PickupSection';
import Cards from "../components/Cards";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black px-4">
      <KeyVisual />
      <PickupSection />
      <Cards />
    </div>
  );
};


export default Home;