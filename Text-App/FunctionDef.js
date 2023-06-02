function sayHi(){
    console.log('Hi');
}

sayHi();

function ClassFunction(fun){
    fun();
}

var sayBye = function(){
    console.log('Bye');
};
ClassFunction(sayBye);

var add=(a,b) => {
    console.log(a+b)
}; 
add(12,14);

var sub=function sub(a,b){
    console.log(a-b)
};
sub(58,89)