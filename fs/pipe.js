'user strict';
//把re  复制到ws
var  fs=require('fs');

var rs=fs.createReadStream('write.txt');
var ws=fs.createWriteStream('output1.txt');


rs.pipe(ws)


// readable.pipe(writable, { end: false });