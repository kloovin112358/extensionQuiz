import React, {useEffect, useState} from 'react';
import DisplayBox from './DisplayBox'
// csv reader
import Papa from 'papaparse'
// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {

  const [extensions, setExtensions] = useState([]);
  const [curExtension, setCurExtension] = useState([]);
  // stores whether the card is on the backside or not
  const [isFlipped, setFlipped] = useState(false);
  // stores whether we pushed the "generate" button, 
  // otherwise it means we pushed the reveal button,
  // used to control whether we have an animation delay on the card flip
  const [isGenerateButton, setGenerateButton] = useState(true);

  const getNewExtension = () => {
    setCurExtension(extensions[Math.floor(Math.random() * extensions.length)])
    setGenerateButton(true)
    setFlipped(false)
  }

  // the first time the extensions are loaded,
  // we need to get a random one
  useEffect(()=>{
    getNewExtension()
  },[extensions])

  useEffect(()=>{
    // on initial page load, we want to load the CSV
    Papa.parse("./file_extensions.csv", {
      download: true,
      //callback function when it's done
      complete: function(results, file) {
        setExtensions(results.data)  
      },
    })
  },[])

  return (
    <>
      <div className='container text-center'>
        <div className='p-5'>
          <DisplayBox 
            extension={curExtension} 
            flipped={isFlipped}
            setFlipped={setFlipped}
            isGenerateButton={isGenerateButton}
            setGenerateButton={setGenerateButton}
          />
          <Button 
            onClick={getNewExtension}
            variant='light'
            className='shadow mt-3'
          >
            Generate
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;