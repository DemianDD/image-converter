import React from "react";
import InputForm from "../components/Input";
import Output from "../components/Output";

export const Home = () => {
  const [translatedText, setTranslatedText] = React.useState("");

  const onTextTranslate = (text: any) => {
    setTranslatedText(text);
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-5">
      <div className="text-[50px] font-medium">Image Converter</div>
      <div className="grid grid-cols-2 w-[1000px] h-[450px] gap-5">
        <div className="p-5 flex justify-center items-center">
          <InputForm onTextTranslate={onTextTranslate} />
        </div>
        <div className="bg-[#232323] rounded-2xl p-5 flex justify-center items-center text-sm text-white">
          <Output translatedText={translatedText} />
        </div>
      </div>
    </div>
  );
};
