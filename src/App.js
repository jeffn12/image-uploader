import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Components
import ImageChooser from './components/ImageChooser';
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
        axios
          .post(
            'https://m4xen5xkpf.execute-api.us-east-1.amazonaws.com/dev/api/getPreSignedURL',
            {
              fileName: files[0].name,
              fileType: files[0].type,
            }
          )
          .then((res) => {
            console.log(res);
            const { uploadURL } = res.data;
            console.log(uploadURL);
            // use signed URL as endpoint to send img
            axios.put(uploadURL, files[0]).then((res) => {
              console.log(res);
              // setURL(return value)
              setURL(
                'https://jlnupload.s3.us-east-1.amazonaws.com/' + files[0].name
              );
              // setFiles(null)
              setFiles(null);
            });
          })
          .catch((err) => {
            console.log(JSON.stringify(err));
          });
      }
    }
  }, [files, url]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {!files && <ImageChooser files={files} setFiles={setFiles} />}
      {files && <Loading />}
      {url && <ResponseScreen />}
    </div>
  );
}

export default App;
