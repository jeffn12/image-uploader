import React, { useState, useRef } from 'react';

function ImageChooser() {
  const [highlight, setHighlight] = useState(false);
  const fileInputRef = useRef('');

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = Object.keys(e.dataTransfer.files).map(
      (file) => e.dataTransfer.files[file]
    );
    console.log(files);
    setHighlight(false);
  };

  const handleFilesAdded = (e) => {
    e.preventDefault();
    const files = Object.keys(e.target.files).map(
      (file) => e.target.files[file]
    );
    console.log(files);
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg shadow-2xl px-10 py-10 max-w-2xl w-3/4">
      <h1 className="text-xl m-2 mt-8">Upload your image</h1>
      <p className="text-xs m-2">File should be Jpeg, Png...</p>
      <div
        aria-label="imageDropZone"
        className={`bg-indigo-${
          highlight ? 200 : 100
        } border-2 border-dashed border-indigo-${
          highlight ? 300 : 200
        } rounded-lg m-2 w-full flex flex-col items-center cursor-pointer`}
        onDragEnter={(e) => {
          e.preventDefault();
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setHighlight(true);
        }}
        onDragLeave={(e) => {
          setHighlight(false);
        }}
        onDrop={handleFileDrop}
        onClick={openFileDialog}
      >
        <img
          src="/upload-holder.svg"
          alt="gray mountains with blue moon in background"
          className="m-10"
        />
        <p className="text-sm mb-10 text-gray-600">
          Drag & Drop your image here
        </p>
      </div>
      <p className="text-sm text-gray-600 my-5">Or</p>
      <button
        id="fileChooserButton"
        onClick={openFileDialog}
        className="rounded-lg bg-indigo-600 text-white py-2 px-6 my-5 focus:outline-none"
      >
        Choose a file
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFilesAdded}
        className="hidden"
      ></input>
    </div>
  );
}

export default ImageChooser;
