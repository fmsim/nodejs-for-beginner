const fs = require('fs');
/* removing folder
fs.rmdirSync('./newDir'); // Sync -> not-asynchronous -> without callback function -> (err)=>{}
*/
/* removing file */
try {
  //body...
  fs.unlinkSync('./newDir/newFile.js');
} catch (err) {
  console.log(err, `Here is the error`);
}
