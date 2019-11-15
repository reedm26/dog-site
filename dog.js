let dogs = {
  huskey: {
    name: "Jeff",
    moods: "jumpy",
    moodIndex: 0,
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "http://www.dogster.com/wp-content/uploads/2019/01/Chocolate-lab-smiling-happy-looking-up.jpg",
    pets: 0
  },
  lab: {
    name: "Leia",
    moods: "Relaxed",
    moodIndex: 0,
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3aPU-UPiFkDNWs6NFQW-qxg3n38Vyz04q5JJqb_Y_Sbpp3EMw&s",
    pets: 0
  },
  poodle: {
    name: "Max",
    moods: "",
    moodIndex: 0,
    tolerance: Math.floor(Math.random() * 9) + 1,
    img:
      "https://www.lucypetproducts.com/wp-content/uploads/2019/08/facts-about-poodles.jpg",
    pets: 0
  }
};
let activeDog = dogs.huskey;
let nameElem = document.querySelector("#dog-names");
let moodsElem = document.querySelector("#dog-moods");
let counterElem = document.querySelector("#pet-counter");
let imgElem = document.querySelector("#dog-pic");
