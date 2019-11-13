function respond(){
  var response = $('#response').val()
  var numVowels = getVowels(response);

  if(numVowels % 4 == 0){
    $('#answer').text('Yes, definitely')
  }
  else if(numVowels % 4 == 1){
      $('#answer').text('No way')
  }
  else if(numVowels % 4 == 2){
      $('#answer').text('Maybe so')
  }
  else if(numVowels % 4 == 3){
    $('#answer').text("It's possible if you work for it");
  }
}

//counts the number of vowels in a string
function getVowels(str) {
  var vowelsCount = 0;

  //loop through the string
  for (var i = 0; i <= str.length - 1; i++) {

  //if a vowel, add to vowel count
    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
