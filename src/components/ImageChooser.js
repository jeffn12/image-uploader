import React from 'react';

function ImageChooser() {
  return (
    <div className="flex flex-col items-center justify-center border-solid rounded-md shadow-xl p-10">
      <h1 className="text-2xl m-5">Upload your image</h1>
      <p className="text-md m-5">File should be Jpeg, Png...</p>
      <div className="m-5">IMG HOLDER</div>
      <p className="text-lg text-gray-600 my-5">Or</p>
      <button className="rounded-lg bg-blue-600 text-white py-2 px-4 my-5">
        Choose a file
      </button>
    </div>
  );
}

export default ImageChooser;
