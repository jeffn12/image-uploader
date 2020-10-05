import React from 'react';
/* eslint-disable-next-line no-unused-vars*/
import ImageChooser from './components/ImageChooser';
/* eslint-disable-next-line no-unused-vars*/
import Loading from './components/Loading';
import ResponseScreen from './components/ResponseScreen';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {/*  <ImageChooser /> */}
      {/* <Loading /> */}
      <ResponseScreen />
    </div>
  );
}

export default App;
