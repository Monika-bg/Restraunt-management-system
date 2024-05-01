const QRCode = require('qrcode');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const MenuPage = require('./Frontend/src/components/MenuPage.jsx'); // Adjust import path

const generateQRCode = (data, filePath) => {
  QRCode.toFile(filePath, data, {
    width: 300,
    height: 300,
  }, (err) => {
    if (err) throw err;
    console.log('QR Code generated successfully!');
    // After generating QR code, display the MenuPage component
    displayMenuPage();
  });
};

const displayMenuPage = () => {
  // Render the MenuPage component
  const menuPageHtml = ReactDOMServer.renderToString(<MenuPage />);
  console.log(menuPageHtml);
  // You can use the generated HTML as needed
};

const filePath = "menu_qr_code.png";

generateQRCode("", filePath); // Passing empty data
