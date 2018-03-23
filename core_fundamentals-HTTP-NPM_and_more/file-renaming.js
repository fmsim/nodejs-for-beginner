const fs = require('fs');
/* rename or move files
fs.rename('./newFile2.js', 'newDir/newFile.js', (err)=>{
  if (err) return err;
  console.log("File moved into a directory and renamed");
});
*/
/* rename or move directory */
fs.rename('./newDir/childDir', './parentDir', (err)=>{
  if (err) return err;
  console.log("Directory moved and renamed");
});
