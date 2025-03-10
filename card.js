document.getElementById("envelope").addEventListener("click", function () {
    this.style.opacity = "0";
    setTimeout(() => {
        document.getElementById("cardContainer").style.opacity = "1";
    }, 500);
    this.style.zIndex = "-10";
});

document.getElementById("card").classList.add("closed");
if (document.getElementById("card").classList.toggle("closed")) {
    this.style.width = "30%";
}

document.getElementById("card").addEventListener("click", function () {
    const cardFront = document.querySelector(".card-front");
    const cardInner = document.querySelector(".card-inner");


    let windowWidth = window.innerWidth;

    if (this.classList.contains("closed")) {
        
        cardFront.style.display = "flex"; // Ensure the front is visible
        cardInner.style.display = "none"; // Hide the inner side
        if (windowWidth < 750) {
            this.style.width = "100%";
            this.style.height = "100%";

            cardFront.style.fontsize = "24px";
            cardFront.style.padding = "2px 6px";
        }else {
            this.style.width = "30%";
        }
    } else {
        cardFront.style.display = "none"; // Hide the front
        cardInner.style.display = "flex"; // Show the inner side
    }
    this.classList.toggle("closed");
});


