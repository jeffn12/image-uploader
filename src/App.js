import React, { useState } from 'react';
/* eslint-disable-next-line no-unused-vars*/
import ImageChooser from './components/ImageChooser';
/* eslint-disable-next-line no-unused-vars*/
import Loading from './components/Loading';
import ResponseScreen from './components/ResponseScreen';

function App() {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setURL] = useState('');

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {!files && <ImageChooser files={files} setFiles={setFiles} />}
      {loading && <Loading />}
      {url && <ResponseScreen />}
    </div>
  );
}

export default App;
