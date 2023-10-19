module.exports = (resetUrl) => {
    try {
      return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            text-align: center;
            padding: 20px;
          }
        
          h2 {
            color: #333;
          }
        
          p {
            margin: 10px 0;
          }
        
          .teal-box {
            background-color: #004d40; /* Teal 900 */
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: inline-block;
          }
        
          .teal-box a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            padding: 10px 20px;
            border-radius: 5px;
            background-color: #00251a; /* Teal 900 - Darker shade */
            transition: background-color 0.3s ease;
          }
        
          .teal-box a:hover {
            background-color: #001a12; /* Teal 900 - Even darker shade on hover */
          }
        
          .impressive-text {
            font-size: 24px;
            font-weight: bold;
            color: #004d40; /* Teal 900 */
            margin-top: 30px;
          }
        
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
        
          .animated-box {
            animation: pulse 2s infinite;
          }
        </style>
      </head>
      <body>
        <h2>Reset Your Password</h2>
        <p>You requested to reset your password. Click the button below to reset it.</p>
        <div class="teal-box animated-box">
          <p class="reset-password">
            <a href="${resetUrl}">RESET PASSWORD</a>
          </p>
        </div>
        <p class="impressive-text">MiME Account</p>
      </body>
      </html>
      `;
    } catch (err) {
      return err;
    }
  };
  