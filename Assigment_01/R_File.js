
const fs = require ('node:fs');


//This is the function that is reading the text file
fs.readFile('Text.txt', 'utf8',(err, data) => {

//This functions is working with a loop 
    if (err){
    //If the loop could not find a text will show "Text could not be read"
        console.error("Text could not be read", err,);
        return;
    }
    //If the loop finds a text will show the paragraph into Text.txt
    console.log(" ---------------------\n", "| This is the text: |\n", "---------------------");
    console.log(data);
});


