// To do any operation / dom manipulation or interact
// with ui DOM Tree must be ready
// To assure the DOM Tree is ready we have to 
//call $(document).ready();
//in this code we are using/ utilizing the concepts of
//callback function and $()=>is nothing but a closure
// dom tree is access by document object
//$()=> takes iputs as follows:
//1. document object
//2. uses CSS Selectors
//a. Tag    : <tag_name>
//b. Id     : #<someidname>
//c. class  : .<class_name>

$(document).ready(function(){
    console.log("Document ready to interact");

        // Tag Selector
    $("h1").click(function(){
        alert(this.id+" Click!");
    });

    // id selector
    $("#h1_2").click(function(){
        $("#h1_2").css("backgroundColor","navy");
        $("#h1_2").css("color","white");
    });

    // class selector
    $(".h1_Class").click(function(){
        $(".h1_Class").css("backgroundColor","teal");
        $(".h1_Class").css("color","white");
    });
});