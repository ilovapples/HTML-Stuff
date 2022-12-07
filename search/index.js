function search() {
    var url = "https://www.google.com/search?q=" + document.getElementById("search_bar").value
    if (url == "https://www.google.com/search?q=") {
        document.getElementById("warning").innerHTML = "Search is empty."
    } else {
        window.open(url)
        document.getElementById("warning").innerHTML = ""
    }
}
function versionShow() {
    var version = "1.0"
    document.getElementById("version").innerHTML = "Search | Build " + version
}
window.onload = versionShow