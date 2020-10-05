import React from 'react';

function ResponseScreen() {
  return (
    <div className="flex flex-col items-center justify-content-center shadow-2xl w-3/4 p-10 rounded-lg max-w-lg">
      <img
        src="/green_check_mark.png"
        alt="white check mark on rounded green background"
        className="w-20 h-20"
      ></img>
      <p className="text-2xl">Uploaded Successfully!</p>
      <div className="flex w-full h-64 m-5 rounded-lg items-center justify-center">
        <img
          className="rounded-lg cover max-w-full max-h-full"
          src="/logo512.png"
          alt="uploaded file display"
        />
      </div>
      <div className="flex items-center border-2 bg-indigo-100 border-indigo-200 h-12 w-full rounded-lg m-1">
        <input
          type="text"
          className="focus:outline-none bg-indigo-100 m-2 w-3/4 text-xs"
        />
        <button className="rounded-lg bg-indigo-600 text-white focus:outline-none text-xs w-1/3 h-full">
          Copy Link
        </button>
      </div>
    </div>
  );
}

export default ResponseScreen;
