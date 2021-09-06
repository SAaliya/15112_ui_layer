// //arrays => []
// const color=["red","blue","green"]
// //iterate : looping construct
// //for, while,dowhie
// console.log("For normal")
// for(let i=0;i<color.length;i++){
//     console.log(color[i]);
// }
// console.log("while normal")
// let i=0;
// while(i<color.length){
//     console.log(color[i]);
//     i++;
// }
// i=2;
// console.log("do while normal")
// do{
//     console.log(color[i]);
//     i++;
// }while(i<color.length);


// color.push("teal");
// color.push("pink");
// color.push("yellow");


// console.log("For each")
// for(let i in color){
//     console.log(color[i]);   
// }
// console.log("before "+color.length)
// console.log(color.pop());
// console.log("after "+color.length)
// console.log(color)


const mycolor="red";
switch(mycolor){
    case "red":
        console.log(mycolor+" Color available")
        break;
        case "green":
            console.log(mycolor+" Color available")
            break;
            case "blue":
                console.log(mycolor+" Color available")
                break;
                default:
                    console.log(mycolor+"Color not available");
                    break;

}

switch(mycolor){
    case "red":
        case "green":
            case "blue":
                console.log(mycolor+" Color available")
                break;
                default:
                    console.log(mycolor+"Color not available");
                    break;

}

const var1="1111";
const var2=1111;
console.log("compared using == only value is compared")
if(var1== var2){
    console.log("Value matched")
}else{
    console.log("Value not matched")
}
console.log("compared using === type as well as value")
if(var1=== var2){
    console.log("Value and type matched")
}else{
    console.log("Value and type not matched")
}
//while comparing use === <,>,<=,>=
