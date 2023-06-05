const readLine= require('readline');
const interface = readLine.createInterface(process.stdin,process.stdout);
interface.question('Please enter your name:', (name)=>{
    console.log(`Hello ${name}`);
    interface.close();
});