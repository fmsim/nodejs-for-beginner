const fs = require('fs');
if (!fs.exists("views")) {
  fs.mkdir('views', (err)=>{
  if (err) return err;
    fs.writeFile('./views/new.html', `This is a new directory and a new file!`, (err)=>{
    if (err) return err;
      console.log("Directory and file saved");
    });
  });
}
