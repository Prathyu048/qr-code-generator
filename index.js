
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs, { writeFile } from 'fs';
inquirer
  .prompt([
    {
        message:"type URL:",
        name:"URL"
    }
  ])
  .then((answers)=>{
    const url=answers.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));
    fs.writeFile('message.txt', url, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      }); 
  })
  .catch((error)=>{
    if(error.isTtyError){

    }else{

    }
  })

