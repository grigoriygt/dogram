console.log("script launched");
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title")
let anchors = 
document.querySelectorAll(".thumbnails-anchor"); 
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault();//canceling default behavior of anchor element hitting
        setDetails(anchors[i]);//setDetails function call with passing reference to appropriate anchor
    })   
}
function setDetails(anchor) {
    console.log("anchor element was pressed", anchor);
    detailsImage.setAttribute("src",anchor.getAttribute("href"));
    detailsTitle.textContent = anchor.getAttribute("data-details-title");
}
//query-запрос
//all HTML elements belonging принадлежащие to the class thumbnails-anchor
//thumbnail-миниатюра/ноготь большого пальца. anchor-якорь