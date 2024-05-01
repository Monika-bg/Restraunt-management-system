import React from 'react';
import { Link } from 'react-router-dom';

const QRCodePage = ({ qrCodeContent }) => {
  return (
    <div>
      <p>{qrCodeContent}</p>
      <Link to="/displayQRCode">
        <button>Scan QR Code</button>
      </Link>
    </div>
  );
};

export default QRCodePage;
