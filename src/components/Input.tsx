import React, { useState } from "react";
import axios from "axios";

const InputForm = ({ onTextTranslate }: any) => {
  const [image, setImage] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files && e.target.files[0];
    setImage(selectedImage);
  };

  const translateImageToText = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) {
      setErrorMessage("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "https://api.api-ninjas.com/v1/imagetotext",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-Api-Key": "p9FwrWB4G+A9Nu1PjuJ+nQ==ff9ilr4QeXzZySYr"
          },
        }
      );

      // Handle the response here, e.g., update state or call a callback function.
      onTextTranslate(response.data);
    } catch (error) {
      // Handle errors here
      setErrorMessage("An error occurred while processing the image.");
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col relative pb-[30px]">
      <form
        className="border border-[#ccc] rounded-xl p-2"
        onSubmit={translateImageToText}
      >
        <input
          name="image"
          className="pl-2 border-r border-[#ccc] focus:outline-0"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button className="px-2 hover:bg-[#eff3ff] rounded-lg" type="submit">
          Submit
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputForm;