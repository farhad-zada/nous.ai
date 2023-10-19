module.exports = (name) =>
  `<!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
      }
  
      h2 {
        color: #004d40; /* Teal 900 */
      }
  
      p {
        margin: 20px 0;
        font-size: 18px;
        color: #333;
      }
  
      .button-container {
        position: relative;
      }
  
      .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        background-color: #004d40; /* Teal 900 */
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        overflow: hidden;
        text-decoration: none; /* Remove underline */
        transition: background-color 0.3s ease;
      }
  
      .button:hover {
        background-color: #00251a; /* Darker shade of Teal 900 */
      }
  
      .button:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
  
      .button:focus:before {
        animation: ripple 0.6s linear;
      }
  
      @keyframes ripple {
        to {
          width: 200px;
          height: 200px;
          opacity: 0;
        }
      }
    </style>
  </head>
  <body>
    <h2>Verification Successful</h2>
    <p>Hi ${name}. Your account has been successfully verified. You can now access all the enchanting features of our platform. Thank you for verifying your email!</p>
    <div class="button-container">
      <a href="https://your-website.com" class="button">Go to Home</a>
    </div>
  </body>
  </html>
  `
