var fs = require('fs');
var colors = require('colors');
// fs.writeFile('./text.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
//     if (err) throw err; 
//     console.log('Zapisano!');
// });

// fs.readFile('./text.txt', 'utf-8', function(err, data) {
//     console.log('Dane przed zapisam!'.blue);
//     console.log(data);
//     fs.appendFile('./text.txt', '\nA tak wygladaja po zapisie', function(err){
//         if (err) throw err;
//         console.log('Zapisano!'.magenta);
//         fs.readFile('./text.txt', 'utf-8', function(err, data) {
//             console.log('Dane po zapisie!'.blue);
//             console.log(data);
//         });
//     });
// });

//co z przypadkiem zagnieżdzenia folderów???
//co oznacza nowo utworzony plik???
fs.readdir('./', function(err, files){
    if (err) throw err;
    console.log('Rozpoznano plik!'.green);
    fs.writeFile('./text.txt', files, function(err){
        if (err) throw err;
        console.log('Zapisano!'.red);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log(data);
        });
    });  
});