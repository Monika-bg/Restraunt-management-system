import React from 'react';

const DisplayQRCodePage = ({ qrCodeContent }) => {
  return (
    <div>
      <h1>SCAN BELOW QR CODE FOR MENU :</h1>
      <p>{qrCodeContent}</p>
      <img src="./menu_qr_code.png" alt="QR Code" />
    </div>
  );
};

export default DisplayQRCodePage;
