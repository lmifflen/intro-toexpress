const { read } = require('fs');
const fs = require('fs/promises')

async function readTextFile() {
    let content = await fs.readFile('sample.txt', { encoding: "ascii"});
    console.log("this is after the readfile");
    console.log(content);
    

}

readTextFile()
//console.log("this is before")
//fs.readFile('sample1.txt', {encoding:"ascii"}).then((content) => {
    //console.log(content);
//})
//.catch((err) => {
    //console.log("error is", err);
//});


