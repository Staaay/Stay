function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let turned = false;

document.addEventListener('keyup', function (event) {
  if(event.key == "e") {

    if (turned == false) {
      turned = true;
      let wzm = Math.floor(Math.random() * 10);
      document.getElementById("name").textContent = "Wzium!";

      if (wzm == 0) {
        document.getElementById("name").style.color = "#ff0000";
      } else if (wzm == 1) {
        document.getElementById("name").style.color = "#ff8800";
      } else if (wzm == 2) {
        document.getElementById("name").style.color = "#ffec00";
      } else if (wzm == 3) {
        document.getElementById("name").style.color = "#09ff00";
      } else if (wzm == 4) {
        document.getElementById("name").style.color = "#00fff7";
      } else if (wzm == 5) {
        document.getElementById("name").style.color = "#0079ff";
      } else if (wzm == 6) {
        document.getElementById("name").style.color = "#000bff";
      } else if (wzm == 7) {
        document.getElementById("name").style.color = "#9600ff";
      } else if (wzm == 8) {
        document.getElementById("name").style.color = "#ff00ec";
      } else if (wzm == 9) {
        document.getElementById("name").style.color = "#ff0096";
      }

    } else {
      turned = false;
      document.getElementById("name").textContent = "Staaay";
      document.getElementById("name").style.color = "white";
    }

    
  }
});
