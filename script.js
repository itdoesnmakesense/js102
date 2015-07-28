$(document).ready(function() {
function sortFunc(text){
  return newArray.sort();
}


var higherFunc = function(text) {
  if(text[i] > 25){
    console.log(text[i]);
 
  }

}

$(function () {
    $('#button').on('click',function(){
        var text = $('#inputText').val();
        var textArray = text.split("|");  
      
      for (i = 0; i < textArray.length; i++) {
        
        higherFunc(textArray);
        }
        
        
         
});
});

});

  // var textArray = text.split(" ");
  // console.log(textInfo);





// $('#button').click(function(){
//   var text = $('#inputText').value;
//   var textInfo = " ";
//   console.log(textInfo);

//   var textArray = text.split(" ");
  
// });
