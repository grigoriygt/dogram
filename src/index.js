console.log("script launched");
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let mainContentEl = document.querySelector(".main-content");
let selectedItem;
let anchors = 
document.querySelectorAll(".thumbnails-anchor"); 
for(let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function(event) {
        event.preventDefault();//canceling default behavior of anchor element hitting
        showDetails();
        setDetails(anchors[i]);//setDetails function call with passing reference to appropriate anchor
    })   
}
function setDetails(anchor) {
    console.log("anchor element  was pressed", anchor);
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("srs", hrefValue);
    anchor.parentElement.classList.add("selected");
    if (selectedItem) {
        selectedItem.classList.remove("selected")
    }
    selectedItem = ancor.parentElement;
    //get elemnt with class thumbnails-title the given anchor
    let thumbnailsTitleSelector = `[href="${hrefValue}"] .thubnails-title`;
    let thumbnailsTitleEl = document.querySelector(thumbnailsTitleSelector);
    //dog name exist inside thimbnailTitleEl.textContent
    detailsTitle.textContent = `${thumbnailsTitleEl.textContent}: ${anchor.getAttribute('data-details-title')} `;
    //detailsTitle.textContent =  anchor.getAttribute("data-details-title");
    //detailsTitle.textContent =  anchor.getAttribute("href");
   // detailsTitle.textContent = anchor.querySelector(".thumbnails-title").textContent + ": " + anchor.getAttribute("data-details-title");
    }
function showDetails() {
mainContentEl.classList.remove('hidden');
}
function hideDetails() {
    mainContentEl.classList.add('hidden');
}
//query-запрос
//all HTML elements belonging принадлежащие to the class thumbnails-anchor
//thumbnail-миниатюра/ноготь большого пальца. anchor-якорь