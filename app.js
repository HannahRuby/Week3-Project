console.log("Hello");

const elements = document.querySelectorAll("input,button");
const button = document.querySelector("button");
const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const text = document.getElementById("text");

let imageIndex = 0;

const images = [
  {
    url: "./assets/luis-arias-1mNAVJaPr-g-unsplash.jpg",
    alt: "2-children-playing-on-green-and-blue-plastic-slide",
  },

  {
    url: "./assets/christian-bowen-uFCkcE6GI40-unsplash.jpg",
    alt: "smiling-baby-lying-forward-on-pink-textile",
  },
  {
    url: "./assets/lubomirkin-XKpPsuuGE_Q-unsplash.jpg",
    alt: "baby-throwing-water-in-the-air",
  },
  {
    url: "./assets/senjuti-kundu-JfolIjRnveY-unsplash.jpg",
    alt: "girl covered in paint",
  },
  {
    url: "./assets/nihal-karkala-M5aSbOXeDyo-unsplash.jpg",
    alt: "baby-in-white-bath-towel",
  },
  {
    url: "./assets/juan-encalada-7E-hgv51mqI-unsplash.jpg",
    alt: "smiling-baby-standing-on-a-sofa",
  },
  {
    url: "./assets/yuri-shirota-p0hDztR46cw-unsplash.jpg",
    alt: "boy-sitting-on-white-cloth-surrounded-by-toys",
  },
  {
    url: "./assets/zoe-graham-mjrif-KW5zw-unsplash.jpg",
    alt: "baby sleeping",
  },
];

function createThumbnails() {
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    img.tabIndex = 0;
    img.addEventListener("click", function () {
      createBigImage(image);
    });
    thumbContainer.appendChild(img);
  });
}

function createBigImage(image) {
  displayImage.innerHTML = "";
  const bigImg = document.createElement("img");
  bigImg.src = image.url;
  bigImg.alt = image.alt;
  displayImage.appendChild(bigImg);
}

createThumbnails();
createBigImage(images[0]);

next.addEventListener(`click`, function () {
  showNextImage(1);
});

prev.addEventListener(`click`, function () {
  showPreviousImage(-1);
});

function showPreviousImage() {
  imageIndex = imageIndex -= 1;
  createBigImage(images[imageIndex]);
}

function showNextImage() {
  imageIndex = imageIndex += 1;
  createBigImage(images[imageIndex]);
}

// elements.forEach(function (element) {
//   element.addEventListener("focus", (e) => {
//     console.log(`Element ${e.currentTarget} is focused`);
//   });
// });
