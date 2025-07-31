import React from "react";
import KeyVisual from "../components/Keyvisual";
import PickupSection from "../components/PickupSection";
import Cards from "../components/Cards";
import Buttons from "../components/Buttons";
import TopLink from "../components/TopLink";

const Home: React.FC = () => {
  return (
    <div>
      <TopLink />
      <div className="min-h-screen flex flex-col bg-[var(--style-background-white)] overflow-x-hidden">
        <KeyVisual />
        <PickupSection />
        <Cards />
        <div className="py-[80px]">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Home;
