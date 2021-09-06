function onClick(event){
    // alert(event.target);
    const id=event.target.id;
    // alert(id+" Click!");
    // const message=document.getElementById(id).value;
    // const message=document.getElementById(id).innerText;
    const button=document.getElementById(id);
    const message=button.innerText;
    alert(message+" Clicked!");
    button.innerHTML="<strong>"+message+"</strong>";
    button.style.backgroundColor="#567488";
    button.style.color="#ffffff";

}

// 1. getElementById
// 2. ON event you can get the target and you can access its attributes such as
    // a. id
    // b. value
    // c. innerText
// 3.dynamic style change using javascript