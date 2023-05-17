import React from 'react';
import { useState } from 'react';



function Card(props) {
    const [downloadUrl, setDownloadUrl] = useState('');

    const handleDownload = () => {
      const url = 'https://example.com/download';
      setDownloadUrl(url);
    }
    return (
        
        <div className="card" style={{ backgroundColor: props.backgroundColor }}>
            <p className="date">{props.date}</p>
            
            <p className='btn1' style={{ backgroundColor: props.buttonColor, width: props.buttonWidth}}>{props.buttonText}</p>
            <div className="pic">{props.profilePicture}</div>
            <div className='name'>{props.name}</div>
            
            <div className="details">
                <p>{props.description}</p>
            </div>
      
            <div className='btnD'>
        <button 
          disabled={!downloadUrl} 
          onClick={handleDownload}
          style={{
            backgroundColor: 'white',
            color: 'blue',
            padding: '10px 20px',
            borderRadius: '20px',
            width: '140px',
            border: '1px solid blue',
            cursor: 'pointer',
          }}
          >
          Download
        </button>
        {props.showDetails && <p>{props.description}</p>}
      </div>
    </div>
        
    );
  }
  
export default Card;
