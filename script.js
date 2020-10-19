/*Declaring global variables*/
var lowerCaseChr = "qwertyuiopasdfghjklzxcvbnm";
var upperCaseChr = "QWERTYUIOPASDFGHJKLZXCVBNM";
var numericChr = "0123456789";
var specialChr = "~!@#$%&=+<>?";

/*This variable hold all the checked characters as arrays*/
var allChrSum ="";

/*This variable holds the value of the random password as a string*/
var allChrSumFinalString ="";

/*Declaring variables for elements*/
var startBtn = document.querySelector("#stBtn");
var passLength = document.querySelector("#passLength");
var checkboxLowerCase = document.querySelector("#lowerCase");
var checkboxUpperCase = document.querySelector("#upperCase");
var checkboxNumeric = document.querySelector("#numeric");
var checkboxSpecialChr = document.querySelector("#specialCharacters");
var generatePass = document.querySelector("#generateBtn");
var passField = document.getElementById("generatedPassword");
var copy = document.querySelector("#copyBtn");

/*Main function, generates the random password if certain conditions are met*/
function randomPassGnr() {

/*Statement to verify if the user input a correct number, if they didn't it will send an alert*/  
  if (passLength.value!==""){

/*Statement to verify if user checked any box, if they didn't it will send an alert*/    
      if(checkboxLowerCase.checked 
      || checkboxUpperCase.checked
      || checkboxNumeric.checked
      || checkboxSpecialChr.checked){

/*If user checks lowercase checkbox*/   
          if(checkboxLowerCase.checked){
            allChrSum = allChrSum + lowerCaseChr;
      }
/*If user checks uppercase checkbox*/
          if(checkboxUpperCase.checked){
            allChrSum = allChrSum + upperCaseChr;
      }

/*If user checks numeric checkbox*/
          if(checkboxNumeric.checked){
            allChrSum = allChrSum + numericChr;
      }

/*If user checks special characters*/
          if(checkboxSpecialChr.checked){
            allChrSum = allChrSum + specialChr;
      }

/*This turns the var from string to an array*/      
          allChrSum = allChrSum.split("");

/*This for loop will circle randomly trough's the final array, the number of times it repeats will depend on the user input in the pass length field*/
          for(var i =0; i < passLength.value; i++){

/*This converts the final password from an array to a string*/
            allChrSumFinalString += allChrSum[Math.floor(Math.random()*allChrSum.length)]
        
/*This will output the generated random string to the generated password field and runs the function that clears the value from the variables so if 
the users hit the generate password again the new value isn't added on top of the old one, this only runs when the for loop ends*/
            if (i+1 == passLength.value){
              passField.value = allChrSumFinalString;
              clearValue();
        }
      }   
  }
/*This trigger the alert if the user doesn't check any of the options*/
      else {
      alert ("Please check at least one option")
  }
  
}

/*This trigger the alert if the user doesn't type any value in the password length field, the default value will always be 8, it can be altered by the user*/
  else {
  alert ("Please write a number between 8-128 ")
}
}
/*This function will clear the values of those var each time the user clicks any checkbox and at the end of the generate pass function, 
the purpose is so the value of the checkboxes inst added more than once*/
function clearValue() {
  allChrSum ="";
  allChrSumFinalString="";
  
}

/*Function to copy the generated password*/
function copyText(event) {

/*Function to prevent default behavior, in this case the behavior of btn inside a form, so the form doesn't get refresh when user hits any btn*/
    event.preventDefault();
    var copyText = document.getElementById("generatedPassword");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }

/*Function that shows the main app and hides the start button*/
function showPassG(){
  document.querySelector(".container").style.display= "block";
  document.querySelector(".container").className += " fade-in";
  
  document.querySelector("#stBtn").className= "fade-out";
  document.querySelector("#stBtn").style.display= "none";

  

}
/*All the event listeners*/
  checkboxLowerCase.addEventListener("click", clearValue);
  checkboxUpperCase.addEventListener("click", clearValue);
  checkboxNumeric.addEventListener("click", clearValue);
  checkboxSpecialChr.addEventListener("click", clearValue);
  copy.addEventListener("click", copyText);
  generatePass.addEventListener("click", randomPassGnr);
  startBtn.addEventListener("click", showPassG)
  