 $('.cal').hide()
$('#calcHelp').hide()

//this function below well show and hide the calculater 

$('#calcHelp').click(function(){
    $('.cal').toggle()
})
//this part for the calculater 
var arr=[]  
$('.btn').click(function () { 
    var n=$(this).val();
    var pa=parseInt(n);
    arr.push(pa);
    $('#dis').append(n);
    $('.clear').click(function(){
        $("#dis").empty()
        arr=[]
    })
;})  


$('.op').click(function(){
   var o= $(this).val();
   $('#dis').append(o);
   if(o === '+'){
     function add(arr){
        var res=0;
        for (let i = 0; i < arr.length; i++) {
            console.log(res)
            res+= arr[i];
        }
        return res
        }
        $(".eaqul").click( function (){
            var res;
            $("#dis").empty();
            res=add(arr)
            console.log(res)
            $("#dis").append(res)
            
        });  
    } 

    if(o === '*'){
        function prod(arr){
            var res=1;
            for (let i = 0; i < arr.length; i++) {
                console.log(res)
                res*= arr[i];
            }
            return res
        }
        $(".eaqul").click( function (){
            var res;
            $("#dis").empty();
            res=prod(arr)
            console.log(res)
            $("#dis").append(res)
            
        });  
    } 
    
    if(o === '-'){
        function subs (arr) {
        var sub = arr[0]
        for (var i = 1 ; i<arr.length ; i++){
            console.log(sub)
         sub -= arr[i]
        }
        return sub 
     }
        $('.eaqul').click( function (){
            var res ;
            $("#dis").empty();
            res=subs(arr);
            console.log(subs(arr))
            $("#dis").append(res)
        });  
    } 
    if(o === '/'){
        function divi(arr){
            var div = arr[0]
        for (var i = 1 ; i<arr.length ; i++){
            console.log(div)
         div /= arr[i]
        }
        return div
        }
       
        $('.eaqul').click( function (){
            var res;
            $("#dis").empty();
            res=divi(arr);
            $("#dis").append(res)
        });
    }

     $('.eaqul').click(function(){
        $("#div").empty();
     })
     

    
})

//this is the intro page event when i click at singUp button it well hide the #main and it show the a form to fill in you well see the event 
$('#signUp').click(function() {
    $('#main').hide()
    $(".container").show()
})

//this is the intro page event when i click at singUp it well hide the #main and it show the a form to singIn or  accsees the page 
$('#signIn').click(function() {
    $('#main').hide()
    $(".container2").show()
})

// /////// from this part all about signin or signup
///creation of the form with desigin that well be have one columns and one row and to fix the postion of it 
var allInputs=$('<div></div>')
allInputs.addClass('container')
$('body').append(allInputs)
$('.container').css({
    "display": "grid",  
    "position": "absolute",
    "grid-columns": "250px",
    "grid-rows":"50px",
    "border":"2px black solid",
    "top": "200px",
    "left": "600px",
    "width":"300px",
    "height":"400px"
 })
$('.container').hide()

//creation of user name input with some css and showing it in the body of the document
var userName=$('<input type="text" >')
userName.addClass('name')
userName.css({
    "margin":"20px",
    "padding":"10px"
})
userName.attr("placeholder","name")
$(allInputs).append(userName)

//creation of user las name input with some css and showing it in the body of the document
var userlastName=$('<input type="text" >')
userlastName.addClass('lastName')
userlastName.css({"margin":"20px",
"padding":"10px"})
userlastName.attr("placeholder","last name")
$(allInputs).append(userlastName)

//creation of user email input with some css and showing it in the body of the document
var email=$('<input type="email" >')
email.addClass('email')
email.css({
    "margin":"20px",
    "padding":"10px"
})
email.attr("placeholder","email")
$(allInputs).append(email)

//creation of user pass input with some css and showing it in the body of the document
var pass=$('<input type="password">')
pass.addClass('pass')
pass.attr("placeholder","password")
pass.css({
    "margin":"20px",
    "padding":"10px"
})
$(allInputs).append(pass)

////////
//creation of signup sbmit with some css and place holder && showing it in the body of the document
var signup=$('<input type="submit" >')
signup.addClass('signup')
signup.attr("value","singUp")
signup.css({
    "margin":"20px",
    "padding":"10px"
})
$(allInputs).append(signup)

// ////////////
var check=$('<div></div>');
check.addClass('container2');
check.css({
    "margin":"20px",
    "padding":"10px"
})
$('body').append(check)
$('.container2').css({
    "display": "grid",  
    "position": "absolute",
    "grid-temaple-columns": "90px",
    "grid-teample-rows":"5px",
    "border":"2px black solid",
    "top": "200px",
    "left": "600px",
    "width":"300px",
    "height":"300px"
})  
 $(".container2").hide()

var email2=$('<input type="email" >')
email2.addClass('email2')
email2.css({
    "margin":"30px",
    "padding":"2px"
})
email2.attr("placeholder","email")
$(check).append(email2)
var pass2=$('<input type="password">')
pass2.addClass('pass2')
pass2.css({
    "margin":"30px",
    "padding":"2px"
})
pass2.attr("placeholder","password")
$(check).append(pass2)

///////

var signin=$('<input type="submit">')
signin.addClass('signin')
signin.attr("value","singIn")
signin.css({
    "margin":"30px",
    "padding":"2px"
})
$(check).append(signin)


// signin.hide()
// ///////////


// //////////////////////////
///this contact is like array every time we call it it well update when push it  DON'T TOUCH THSI CODE
 var contact=JSON.parse(localStorage.data)
 function create(email,password,name,lastname) {
    return {
    userName:name,
    userlastName:lastname,
    email : email,
    password : password
 } 
 }
// this event  when i click at the singUp it well check if you fill the all the inputs if the inpu are not filled it well some border -style and also if inputs are filed it well take the value of each input and save them in object annd push that object in array as data that well use later 
$(signup).click(function () {
    contact.push(create($(".email").val(),$(".pass").val(),$(".name").val(),$(".lastName").val()))
    localStorage.setItem('data', JSON.stringify(contact));
    console.log(JSON.parse(localStorage.data))
    console.log(contact)
    if($(".pass").val().length < 8 && (".email").indexOf('@')){
            $(".email").css('border-color','red')
            $(".pass").css('border-color','red')
        }else if($(".email").val().match(/[a-z]/ig) && $(".email").val().match(/[0-9]/ig) && 
         $(".pass").val().match(/[a-z]/ig) && $(".pass").val().match(/[0-9]/ig)){
             $('.container').css('border-color','green')
             $('.container').hide()
             $('#calcHelp').show()
             $('#main2').show()
          }else if($(".email").val().match(/[a-z]/ig) && $(".pass").val().match(/[a-z]/ig)){
                $('.container').css('border-color','green')
                $('.container').hide()
                $('#calcHelp').show()
                $('#main2').show()
            }else if($(".name").val() === '' && $(".lastName").val() === ''){
                    $(".name").css('border-color','red')
                    $(".lastName").css('border-color','red')
                }else{
                    $(".email").css('border-color','green')
                    $(".pass").css('border-color','green')
                    $(".name").css('border-color','green')
                    $(".lastName").css('border-color','green')
                }
})

//the singin it
$(signin).click(function () { 
    var emailVal=$(".email2").val()
    var passVal=$('.pass2').val()
   for(var i=0;i<contact.length;i++){
       if(contact[i].email === emailVal && contact[i].password === passVal ){
        $(".container2").hide()
        $('#main2').show()
        $('#calcHelp').show()
       
       }
   }
});

$('#main2').hide()

$('.sel').click(function(){
    var arr=[]
    var C=$("input:checked")
    console.log(c)
    for(var i=0;i<arr.length;i++){

    }
    
    console.log(arr);
    
})

$('.sginOut').click(function(){
    $('#main2').hide()
    $('#calcHelp').hide()
    $('#main').show()
})








// firas
// jedidi
// firas@gmail.com
// firasjedidi
