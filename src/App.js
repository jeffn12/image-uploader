import React, { useState, useEffect } from 'react';
/* eslint-disable-next-line no-unused-vars*/
import ImageChooser from './components/ImageChooser';
/* eslint-disable-next-line no-unused-vars*/
import Loading from './components/Loading';
import ResponseScreen from './components/ResponseScreen';

function App() {
  const [files, setFiles] = useState(null);
  const [url, setURL] = useState('');

  useEffect(() => {
    if (files !== null) {
      console.log(files);
      if (files[0].type.startsWith('image')) {
        // send img info to API, get back signed URL
        fetch(
          'https://m4xen5xkpf.execute-api.us-east-1.amazonaws.com/dev/api/getPreSignedURL',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              fileName: files[0].name,
              fileType: files[0].type,
            }),
          }
        )
          .then((res) => res.json())
          .then(({ uploadURL }) => {
            console.log(uploadURL);
            // use signed URL as endpoint to send img
            // setURL(return value)
            // setFiles(null)
          })
          .catch((err) => {
            console.log(JSON.stringify(err));
          });
      }
    }
  }, [files]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {!files && <ImageChooser files={files} setFiles={setFiles} />}
      {files && <Loading />}
      {url && <ResponseScreen />}
    </div>
  );
}

export default App;
