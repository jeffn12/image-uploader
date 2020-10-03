import React from 'react';
import ImageChooser from './components/ImageChooser';
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
