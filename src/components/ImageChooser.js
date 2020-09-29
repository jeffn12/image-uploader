import React from 'react';

function ImageChooser() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg shadow-2xl px-10 py-10 max-w-2xl w-3/4">
      <h1 className="text-xl m-2 mt-8">Upload your image</h1>
      <p className="text-xs m-2">File should be Jpeg, Png...</p>
      <div className="bg-indigo-100 border-2 border-dashed border-indigo-200 rounded-lg m-2 w-full flex flex-col items-center">
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
      <button className="rounded-lg bg-indigo-600 text-white py-2 px-6 my-5">
        Choose a file
      </button>
    </div>
  );
}

export default ImageChooser;