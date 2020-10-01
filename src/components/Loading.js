import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col justify-center shadow-2xl rounded-lg px-10 max-w-2xl w-3/4 h-48">
      <p className="text-xl bold my-5">Uploading...</p>
      <div id="loading-bar" className="h-3 bg-gray-300 rounded-lg">
        <div
          id="progress"
          className="h-3 bg-indigo-300 rounded-lg w-1/3 animate-loading"
        ></div>
      </div>
    </div>
  );
}

export default Loading;
