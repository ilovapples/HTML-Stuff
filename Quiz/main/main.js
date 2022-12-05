function printName() {
    var name = document.getElementById("name").value;
    var greeting = "Hello, " + name + ".";
    if (greeting == "Hello, .") {
        document.getElementById("name_here").innerHTML = "Input is empty.";
        document.getElementById("emptyLine").innerHTML = null;
    } else {
        document.getElementById("name_here").innerHTML = greeting;
        document.getElementById("emptyLine").innerHTML = null;
    }
}
function saveData() {
    var textToSave = "Hello"
    var hiddenElement = document.createElement('a');
  
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'myFile.txt';
    hiddenElement.click();
  }
  
  document.getElementById('test').addEventListener('click', download_txt);