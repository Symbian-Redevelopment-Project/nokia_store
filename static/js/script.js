function getCookie(name) { // Copyright: https://stackoverflow.com/a/15724300
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function homeStart() {
    if (getCookie("view") == "list") {
        listView()
    } else {
        gridView()
    }
}

function listView() {
    document.getElementById("gridViewAnchor").classList.remove("selected")
    document.getElementById("listViewAnchor").classList.add("selected")
    document.cookie = "view=list"
    document.getElementById("entityList").classList = "entityList listView"
}

function gridView() {
    document.getElementById("gridViewAnchor").classList.add("selected")
    document.getElementById("listViewAnchor").classList.remove("selected")
    document.cookie = "view=grid"
    document.getElementById("entityList").classList = "entityList gridView"
}

function screenshotHandlers(length) {

    for (var i = 1; i <= length; i++) {
        screenshot = document.getElementById("screenshot" + i.toString());
        screenshot.addEventListener('mouseover', function() {
            document.getElementsByClassName("preview")[0].getElementsByTagName("img")[0].src = this.href;
        });   
    }
}