function doSomething(msg,funref){
    console.log("Dosomething called"+msg);
    funref();
}

doSomething("using arrow function",()=>{
    console.log("using => arrow function we are working");
})