$(document).ready(function(){
  $("#puzzle").submit(function(event){
    event.preventDefault();
    var text = $("input#text").val();

    var vowels = ["a", "e", "i", "o", "u"]

    var sentencearray = text.split("");

    for (var i = 0; i < sentencearray.length; i += 1) {
      vowels.forEach(function(vowel) {
        if (sentencearray[i] === vowel) {
          sentencearray[i] = "-"
        }

      })
    }

    var newstring = sentencearray.join("");
    console.log(newstring);
    $("#puzzle").text(newstring);


  })




})