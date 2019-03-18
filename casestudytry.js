const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*const getInfo = () => ({
    name: 'hasan',
    company: 'Google',
});
let randomTime = () => {Math.floor(Math.random() * 100) + 1};

function time(){
    serviceTime = Math.floor(Math.random()*100)+1;
}*/

var d = new Date();
var n = d.getHours();
//console.log(""+n);

console.log(" ");
console.log("Welcome to Himi's service bay");
console.log("*****************************");
console.log(" ");

if(n<19){
    rl.question("Enter number of car : ", (noCar) => {
        console.log(`Number of car in queue : ${noCar}`);
        console.log(" ");
        
        //serviceTime = Math.floor(Math.random()*100)+1;
    
        //var hours = (new Date()).getHours();
        //console.log(""+ hours+"");
    
    if(noCar <= 5){ 
        for(i=1; i<=noCar; i++){
            serviceTime = Math.floor(Math.random()*100)+20;
            console.log("car          : "+i+"");
            console.log("service time : "+Math.floor(serviceTime/60)+ " hour " +serviceTime%60+ " minute " );
            console.log(" ")
    
        }
        console.log("proceed to the bay.");
    
    }
    
    else {
    x = 5;
    for(i=1; i<=5; i++){
        serviceTime = Math.floor(Math.random()*100)+30;
        console.log("car          : "+i+" ");
        console.log("service time : "+Math.floor(serviceTime/60)+ " hour " +serviceTime%60+ " minute " );
        console.log(" ");
    
    }    
        console.log(""+noCar-5+" car(s) please wait at the reserve bay because only 5 car can proceed to the bay");
        console.log(" ");
    
    y = noCar - 5;
    
    
    for(i=1; i<=y; i++){
        serviceTime = Math.floor(Math.random()*100)+30;
        console.log("car          : "+(i+5)+" ");
        console.log("service time : "+Math.floor(serviceTime/60)+ " hour " +serviceTime%60+ " minute " );
        console.log(" ");
      
    }
    
    }
})
}

else {
  console.log("Himi's service bay is already closed ! Please come tomorrow . Thank you :)");
};

// rl.close();
