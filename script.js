// script.js

function generateQR() {
    const qrText = document.getElementById('qrText').value;
    const qrCodeCanvas = document.getElementById('qrCodeCanvas');
    const downloadLink = document.getElementById('downloadLink');
  
    if (!qrText) {
      alert('Please enter text or a URL to generate a QR Code.');
      return;
    }
  
    // Clear previous QR Code
    qrCodeCanvas.innerHTML = '';
  
    // Generate QR Code
    QRCode.toCanvas(qrCodeCanvas, qrText, { width: 256 }, function (error) {
      if (error) {
        console.error(error);
        alert('Failed to generate QR Code.');
      } else {
        console.log('QR Code generated successfully!');
        // Show download link
        downloadLink.style.display = 'inline-block';
        downloadLink.href = qrCodeCanvas.toDataURL('image/png');
      }
    });
  }