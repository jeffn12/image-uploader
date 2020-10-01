import React from 'react';
import ImageChooser from './components/ImageChooser';
import Loading from './components/Loading';

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {/*  <ImageChooser /> */}
      <Loading />
    </div>
  );
}

export default App;
