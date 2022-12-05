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
