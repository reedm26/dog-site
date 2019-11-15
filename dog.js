let dogs = {
  huskey: {
    name: "Jeff",
    moods: ["jumpy", "Psyco"],
    moodIndex: 0,
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "http://www.dogster.com/wp-content/uploads/2019/01/Chocolate-lab-smiling-happy-looking-up.jpg",
    pets: 0
  },
  lab: {
    name: "Leia",
    moods: ["Relaxed", "Nuts"],
    moodIndex: 0,
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aPU-UPiFkDNWs6NFQW-qxg3n38Vyz04q5JJqb_Y_Sbpp3EMw&s",
    pets: 0
  },
  poodle: {
    name: "Max",
    moods: ["gracefull", "freak"],
    moodIndex: 0,
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "https://www.lucypetproducts.com/wp-content/uploads/2019/08/facts-about-poodles.jpg",
    pets: 0
  }
};
let activeDog = dogs.huskey;
let dogToReset;
let nameElem = document.querySelector("#dog-names");
let petsElem = document.querySelector("#dog-pets");
let statusElem = document.querySelector("#dog-status");
let imgElem = document.querySelector("#dog-pic");
let petBtn = document.querySelector("#pet-button");

function pet() {
  activeDog.pets++;
  if (activeDog.pets > activeDog.tolerance) {
    activeDog.moodIndex = 1;
  }
  drawDog();
}
function drawDog() {
  nameElem.innerText = activeDog.name;
  petsElem.innerText = activeDog.pets;
  statusElem.innerText = activeDog.moods[activeDog.moodIndex];
  imgElem.setAttribute("src", activeDog.img);
  if (activeDog.moodIndex > 0) {
    petBtn.setAttribute("disabled", "true");
    dogToReset = activeDog;
    setTimeout(() => {
      dogTreat();
    }, 3000);
  } else {
    petBtn.removeAttribute("disabled");
  }
}
function setActiveCat(dogName) {
  activeDog = dogs[dogName];
  drawDog();
}

function dogTreat() {
  dogToReset.pets = 0;
  dogToReset.moodIndex = 0;
  drawDog();
}

drawDog();
