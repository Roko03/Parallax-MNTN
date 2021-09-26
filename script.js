var rellax = new Rellax('.rellax');


var links = document.querySelectorAll(".right-side a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        links.forEach(function (link) {
            link.classList.remove("active");
        })
        link.classList.add("active");

    })
});