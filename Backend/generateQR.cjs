const QRCode = require('qrcode');
const fs = require('fs');

const generateQRCode = (data, filePath) => {
  QRCode.toFile(filePath, data, {
    width: 300,
    height: 300,
  }, (err) => {
    if (err) throw err;
    console.log('QR Code generated successfully!');
  });
};

const menuData = {
  breakfast: [
    { name: 'Pancakes', price: '$5.99' },
    { name: 'Eggs Benedict', price: '$7.99' },
    // Add more breakfast items as needed
  ],
  lunch: [
    { name: 'Caesar Salad', price: '$8.99' },
    { name: 'Cheeseburger', price: '$9.99' },
    // Add more lunch items as needed
  ],
  dinner: [
    { name: 'Grilled Salmon', price: '$15.99' },
    { name: 'Filet Mignon', price: '$24.99' },
    // Add more dinner items as needed
  ]
};

const menuDataString = JSON.stringify(menuData);
const filePath = "menu_qr_code.png";

generateQRCode(menuDataString, filePath);
