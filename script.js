// 1. versi pribadi
// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   if (e.target.className == "thumb") {
//     // console.log(e.target.parentElement.previousElementSibling); //element gambar
//     // console.log(e.target); // element thumbnail
//     // console.log(e.target.getAttribute("src")); //get attribut thumbnail
//     let att = e.target.getAttribute("src");
//     let imgLarge = e.target.parentElement.previousElementSibling;
//     imgLarge.setAttribute("src", att);
//     e.preventDefault();
//     e.stopPropagation();
//   }
// });

// 2. versi WPU
const container = document.querySelector(".container");
const imgLarge = document.querySelector(".img-l");
const thumbnails = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    imgLarge.src = e.target.src;
    imgLarge.classList.add("fade");
    setTimeout(function () {
      imgLarge.classList.remove("fade");
    }, 500);

    thumbnails.forEach(function (thumb) {
      thumb.className = "thumb";
    });
    e.target.classList.add("active");

    e.preventDefault();
    e.stopPropagation();
  }
});
