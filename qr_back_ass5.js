const QRCode = require('qrcode');

// Data to encode in the QR code
const data = "My name is Rajasree Laha, currently I am in my 4th year of B.Tech in Computer Science Engineering, which I am pursuing from Aliah University, Kolkata ,and my current CGPA is 9.56. I have passed my class 12 with 88.8% and class 10 with 89.28%.I have learnt programming languages like c, Java, python, JavaScript & I am learning web development basically the frontend development. I have hands-on practice in designing a website, making web pages. I have made projects like Landing page, Netflix clone, Tic Tac Toe etc. I did an internship as a web development intern at Oasis Infobyte & heading towards an internship on MERN development at Ardent pvt Lmtd. I am also an opensource contributor.";

// Generate QR code and save as an image file
QRCode.toFile('qrcode.png', data, function (err) {
  if (err) throw err;
  console.log('QR code generated and saved as qrcode.png');
});

