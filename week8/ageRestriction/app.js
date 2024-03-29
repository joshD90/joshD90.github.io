const name = prompt("enter your name please");
const age = prompt("enter your age please");

const welcomeBanner = document.getElementById("welcomeBanner");

const determineAge = () => {
  if (age < 18) {
    alert("You are not old enough");
  } else {
    welcomeBanner.innerHTML = "Welcome " + name;
  }
};

determineAge();
