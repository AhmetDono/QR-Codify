import React, { useState } from 'react'
import axios from 'axios';
import jsPDF from 'jspdf';

function Generator() {
    const [URL,setURL] = useState("");
    const [qrImage,setQrImage]= useState("");
    console.log(URL)


    const handleClick = async (e) => {
        e.preventDefault();
        const options = {
          url: 'http://localhost:5000/api/url/createUrl',
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
            fullUrl: URL,
          }
        };
        
        axios(options)
          .then(response => {
            setQrImage(response.data.qr)
            console.log(response.status)
          });
    }
    
    const handleDownload = (format) => {
      // Önce canvas oluşturun
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();
      img.src = qrImage;
  
      // Resim yüklendikten sonra canvas boyutlarını ayarlayın
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
  
        // Canvas'a resmi çizin
        context.drawImage(img, 0, 0);
  
        // İndirme bağlantısını oluşturun
        const downloadLink = document.createElement('a');
  
        if (format === 'png') {
          downloadLink.href = canvas.toDataURL('image/png');
          downloadLink.download = 'qr_code.png';
        }else if (format === 'pdf') {
          // PDF olarak indirmek için bir döküman oluşturun
          const pdf = new jsPDF();
          pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, img.width, img.height);
          downloadLink.href = pdf.output('bloburl');
          downloadLink.download = 'qr_code.pdf';
        }
        // İndirme işlemini başlatın
        downloadLink.click();
      };
    }


  return (
    <>
    <div className='col-6 min-h-screen border-b border-solid border-gray-300 shadow-md' >
    <div className='col 12 flex items-center justify-center mt-40 mb-16 fs-4 '>QR Codify Ile Hızlı ve Güvenli Bağlantılar Oluşturun!</div>
    <div className='col 12 flex items-center justify-center mb-16'>
    <div className="input-group w-64 mr-5">
      <span className="input-group-text">URL</span>
      <input type="text" name='fullUrl' onChange={(e) => setURL(e.target.value)} class="form-control" aria-label="Username" aria-describedby="basic-addon1"></input>
    </div>
      <button className='btn btn-info' onClick={handleClick}  >Donustur</button>
    </div>
    </div>
    <div className='col-6 min-h-screen border-b border-solid mt-10 border-gray-300 shadow-md' >
    <div className='row' >
      <div className='col-12 mt-16 flex items-center justify-center' >
      <img src={qrImage || 'data:image/png;base64,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' }  alt=''></img>
      </div>
    </div>
    <div className='row mt-3' >
      <div className='col-6 flex items-center justify-center'>
      <button className='btn btn-info' onClick={() => handleDownload('png')} >Indir/PNG</button>
      </div>
      <div className='col-6 flex items-center justify-center '>
      <button className='btn btn-info' onClick={() => handleDownload('pdf')} >Indir/PDF</button>
      </div>
    </div>
  </div>
    </>
    
    
  )
}

export default Generator