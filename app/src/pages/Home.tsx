import React from "react";
import KeyVisual from "../component/Keyvisual"; // ファイル名の大文字小文字に注意

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black px-4">
      <KeyVisual />
    </div>
  );
};

export default Home;