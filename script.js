function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
          for (var key in coll) { 
                f(coll[key], key); 
          } 
    } 
} 

function reduce(array, f, acc) { 
    if (acc === undefined) { 
          acc = array[0]; 
          array = array.slice(1); 
    } 
    each(array, function(element, i) { 
          acc = f(acc, element, i); 
    }); 
    return acc; 
}


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
            res+= arr[i];
        }
        return res
        }
    // var add=arr.reduce((prev,curnt) =>{return prev+curnt})
   
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
        var sub=arr.reduce(function(curnt,prev) {
            // console.log(arr)
            res= arr[0] - arr[1]
            console.log(res)
        })
        //var equal=document.getElementsByClassName('eaqul')
        $('.eaqul').click( function (){
            var res;
            $("#dis").empty();
            console.log(sub)
            // console.log(res);
            $("#dis").append(res)
        });  
    } 
    if(o === '/'){
        // function divi(arr){
        //     var res=0;
        //     for (let i = 0; i < arr.length; i++) {
        //         res/= arr[i];
        //     }
        //     return res
        // }
        var div=arr.reduce(function(prev,curnt) {
            var res=prev/curnt
            return res
        })
        $('.eaqul').click( function (){
            //  var res;
            $("#dis").empty();
            // res=div;
            console.log(div);
            // $("#dis").append(res)
        });  
    } 

    $('.eaqul').click(function(){
     $("#div").empty();
    })
})


// var add=arr.reduce((prev,curnt) =>{return prev+curnt})
// console.log(add)
// var pro=arr.reduce((prev,curnt) => prev*curnt )
// console.log(pro)


  
