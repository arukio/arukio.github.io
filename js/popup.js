
function createPopup(str)
{
    var node = document.createElement("div");
    node.classList.add("pop-up");
    node.innerHTML = str;
    node.onclick = destroyPopup;

    document.body.appendChild(node);

    requestAnimationFrame(() => {
        node.style.width = "auto";
        node.style.padding = "10px 30px 10px 30px";
    });
}

function destroyPopup()
{
    var element = document.getElementsByClassName("pop-up")[0];

    var style = window.getComputedStyle(element);

    element.style.paddingLeft = "0";

    element.style.paddingRight = "0";

    element.style.opacity = "0";

    setInterval(() => {
        element.remove();
    }, parseFloat(style.getPropertyValue('transition-duration')) * 1000);
}
