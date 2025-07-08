"use client";
import Image from "next/image";
import React, { use, useRef, useState } from "react";

type ImagePickerProps = {
  label?: string;
  name?: string;
};

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const ImageInput = useRef<HTMLInputElement | null>(null);

  function chooseFile() {
    ImageInput.current?.click();
  }

  // handler function for file selection
  function HandleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const File = event.target.files?.[0];

    if (!File) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPickedImage(reader.result as string | ArrayBuffer);
    };

    reader.readAsDataURL(File as Blob);
  }

  return (
    <div>
      <label htmlFor="image">{label}</label>
      <div className="flex items-start gap-6 mb-4">
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ImageInput}
          className="hidden"
          onChange={HandleImage}
          required
        />
        <button
          type="button"
          onClick={chooseFile}
          className="
          border-0 px-6 py-2 bg-[#a4abb9] rounded-sm cursor-pointer font-inherit
          transition-colors duration-200
          hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]
        "
        >
          Choose a file
        </button>
      </div>
      <div
        className="
        w-40 h-40 border-2 border-[#a4abb9] flex justify-center items-center
        text-center text-[#a4abb9] relative
      "
      >
        {!pickedImage && <p>No Image selected yet.</p>}
        {pickedImage && typeof pickedImage === "string" && (
          <img
            src={pickedImage}
            alt="Preview"
            className="object-cover w-full h-full absolute inset-0"
          />
        )}
      </div>
    </div>
  );
}
