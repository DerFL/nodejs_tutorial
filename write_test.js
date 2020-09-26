var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

fs.appendFile('mynewfile2.txt', ' This is my text.\n line 2', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

fs.writeFile('mynewfile2.txt', 'This replaces the original content', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

setTimeout(function(){ console.log("3 secs passed"); }, 3000);

fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
})