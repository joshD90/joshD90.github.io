const messageElement = document.getElementById("message");
const formElement = document.querySelector("form");

const inputElements = document.querySelectorAll("input");
const nameInput = inputElements[0];
const emailInput = inputElements[1];

//managing it through the form action
const handleSubmit = (e) => {
  //iterable but not an array - convert to an array
  const inputArray = Array.from(e.target.elements);
  //map our values into a new array however the last input does not count as this is the submit button

  const values = inputArray.map((input, index) =>
    index < inputArray.length - 1 ? input.value : null
  );
  //destructure values
  const [name, email] = values;

  let text;
  if (name && email) {
    text = `${name}, thankyou for your details.  We will be in touch via ${email} shortly`;
    //only disappear on success otherwise cant write the form
    formElement.style.display = "none";
  } else {
    text = "Please enter a value for both name and email";
  }

  messageElement.innerText = text;
};

//through DOM
const handleSubmit2 = (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;

  if (name && email) {
    text = `${name}, thankyou for your details.  We will be in touch via ${email} shortly`;
    formElement.style.display = "none";
  } else {
    text = "Please enter a value for both name and email";
  }

  messageElement.innerText = text;
};
