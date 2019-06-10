'ues strict';


var fs=require('fs');

/*var  data='这个是文件';

fs.writeFile('write.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok')
    }
})
*/
var  data= 'aaaa';
try {
    fs.readFileSync('write.txt',data)
}  catch(err){
    console.log(err);
}