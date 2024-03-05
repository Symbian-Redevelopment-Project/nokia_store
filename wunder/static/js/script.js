function getCookie(name) { // Copyright: https://stackoverflow.com/a/15724300
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

if (getCookie("view") == "list") {
    listView()
} else {
    gridView()
}

function listView() {
    document.getElementById("gridViewAnchor").classList = "gl"
    document.getElementById("listViewAnchor").classList = "gl selected"
    document.cookie = "view=list"
    document.getElementById("entityList").classList = "entityList listView"
}

function gridView() {
    document.getElementById("gridViewAnchor").classList = "gl selected"
    document.getElementById("listViewAnchor").classList = "gl"
    document.cookie = "view=grid"
    document.getElementById("entityList").classList = "entityList gridView"
}

function changeScreenshot(i) {
    console.log("screenshot" + i.toString())
    document.getElementById("preview").getElementsByTagName("img")[0].src = document.getElementById("screenshot" + i.toString()).getElementsByTagName("img")[0].src
}

function screenshotHandlers() {
    screenshot1 = document.getElementById("screenshot1");
    screenshot1.addEventListener('mouseover', function() {
        document.getElementsByClassName("preview")[0].getElementsByTagName("img")[0].src = this.href;
    });

    screenshot2 = document.getElementById("screenshot2");
    screenshot2.addEventListener('mouseover', function() {
        document.getElementsByClassName("preview")[0].getElementsByTagName("img")[0].src = this.href;
    });

    screenshot3 = document.getElementById("screenshot3");
    screenshot3.addEventListener('mouseover', function() {
        document.getElementsByClassName("preview")[0].getElementsByTagName("img")[0].src = this.href;
    });
}