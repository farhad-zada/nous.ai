module.exports = () =>
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
       color: #d32f2f; /* Red 700 */
     }
 
     p {
       margin: 20px 0;
       font-size: 18px;
       color: #333;
     }
 
     .button-container {
       display: flex;
       justify-content: center;
       align-items: center;
       margin-top: 20px;
     }
 
     .button {
       display: inline-block;
       padding: 10px 20px;
       font-size: 16px;
       margin: 0 10px;
       background-color: #004d40; /* Teal 900 */
       color: white;
       border: none;
       border-radius: 5px;
       cursor: pointer;
       text-decoration: none;
       transition: background-color 0.3s ease;
     }
 
     .button:hover {
       background-color: #00251a; /* Darker shade of Teal 900 */
     }
   </style>
 </head>
 <body>
   <h2>Invalid Request</h2>
   <p>The request you made is invalid or expired. Please choose one of the following actions:</p>
   <div class="button-container">
   <a href="https://your-website.com/signin" class="button">Log In</a>
     <a href="https://your-website.com/signup" class="button">Sign Up</a>
   </div>
 </body>
 </html>
 `
