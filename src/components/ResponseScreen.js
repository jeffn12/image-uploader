import React from 'react';

function ResponseScreen() {
  return (
    <div className="flex flex-col items-center justify-content-center shadow-2xl w-3/4 p-5 rounded-lg">
      <i>GREEN CHECK MARK</i>
      <p className="text-xl">Uploaded Successfully!</p>
      <div className="w-5/6">
        <img className="w-full" src="logo192.png" alt="uploaded" />
      </div>
      <div className="flex align-stretch border-2 bg-indigo-100 border-indigo-200 h-12 w-full rounded-lg m-1">
        <input
          type="text"
          className="focus:outline-none bg-indigo-100 m-2 w-3/4"
        />
        <button className="rounded-lg bg-indigo-600 text-white focus:outline-none p-4 text-xs w-1/3">
          Copy URL
        </button>
      </div>
    </div>
  );
}

export default ResponseScreen;
