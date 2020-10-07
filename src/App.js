import React, { useState } from 'react';
/* eslint-disable-next-line no-unused-vars*/
import ImageChooser from './components/ImageChooser';
/* eslint-disable-next-line no-unused-vars*/
import Loading from './components/Loading';
import ResponseScreen from './components/ResponseScreen';

function App() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <ImageChooser files={files} setFiles={setFiles} />
      <Loading />
      <ResponseScreen />
    </div>
  );
}

export default App;
