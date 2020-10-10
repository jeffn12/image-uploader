import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Components
import ImageChooser from './components/ImageChooser';
import Loading from './components/Loading';
import ResponseScreen from './components/ResponseScreen';

function App() {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setURL] = useState('');

  useEffect(() => {
    if (files !== null) {
      setLoading(true);
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
            const { uploadURL } = res.data;
            // use signed URL as endpoint to send img
            axios.put(uploadURL, files[0]).then((res) => {
              setLoading(false);
              setURL(
                'https://jlnupload.s3.us-east-1.amazonaws.com/' + files[0].name
              );
            });
          })
          .catch((err) => {
            console.error(err);
            // TODO: handle error in the UI/alert user
            alert('There was a problem uploading that file: ' + err.message);
            setFiles(null);
            setLoading(false);
          });
      }
    }
  }, [files, url]);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      {!files && <ImageChooser setFiles={setFiles} />}
      {loading && !url && <Loading />}
      {url && <ResponseScreen url={url} />}
    </div>
  );
}

export default App;
