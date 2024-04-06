console.log("Hello");

const elements = document.querySelectorAll("input,button");
const button = document.querySelector("button");
const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const text = document.getElementById("text");

elements.forEach(function (element) {
  element.addEventListener("focus", (e) => {
    console.log(`Element ${e.currentTarget} is focused`);
  });
});

let imageIndex = 0;

const images = [
  {
    url: "https://images.unsplash.com/photo-1594679683518-7d61030ed39c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "2-children-playing-on-green-and-blue-plastic-slide",
  },

  {
    url: "https://images.unsplash.com/photo-1561567131-f7d83083aee0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "baby-wearing-blue-blanket",
  },
  {
    url: "https://images.unsplash.com/photo-1610901137736-d7cc46657b11?q=80&w=2035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "baby-lying-on-blue-textile",
  },
  {
    url: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "baby-under-purple-blanket",
  },
  {
    url: "https://images.unsplash.com/photo-1630305130592-210da48f151e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "baby-in-white-bath-towel",
  },
  {
    url: "https://images.unsplash.com/photo-1552788960-65fcafe071a5?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "smiling-baby-lying-forward-on-pink-textile",
  },
  {
    url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "boy-sitting-on-white-cloth-surrounded-by-toys",
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
