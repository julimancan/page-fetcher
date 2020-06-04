const userInput = process.argv.slice(2);
const webAddres = userInput[0];
const localPath = userInput[1];
const request = require('request');
const fs = require('fs')

// console.log(localPath);

const writeFile = (body) => {
  fs.writeFile(localPath, body,{flag: "wx"}, function (error) {
    // if(localPath === ) {
    //   console.log("File already exists")
    //   return;
    // }
    if (error) {
      console.log('error:', error);
    }
    // request(webAddres, function (error, response, body) {
      //   if (error) {
        //     console.log('error:', error);
        //   }
        // });
      });
    };
    
    
    request(webAddres, (error, response, body) => {
      if (error) {
        // Print the error if one occurred
        console.log('error:', error);
      }
      writeFile(body);
      const size = body.length;
       console.log(response.headers);
      console.log(`Downloaded and saved ${size} Bytes to ${localPath}`);
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
});

