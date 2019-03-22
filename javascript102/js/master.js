var textInput = document.querySelector("#first-name");
var outputs = document.querySelectorAll("p");

function outputText() {
  for(var i = 0; i < outputs.length; i++ )
  {
     outputs[i].innerHTML = textInput.value;
  }
}

textInput.addEventListener("input", function() {
  outputText();
});

var clickableDiv = document.querySelector("#clickable-div");
var clickableDivToo = document.querySelector("#clickable-div-too");

clickableDiv.addEventListener("click", function(){
    console.log(this);
    this.style.backgroundColor = "rgb(213,100,5)";
});

clickableDivToo.addEventListener("click", function(){
    console.log(this);
    this.innerHTML = "You just clicked this!";
});
