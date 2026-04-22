function changeText() {
  document.getElementById("text").innerText = "Hello JavaScript!";
}

let count = 0;

function increment() {
  count++;
  document.getElementById("count").innerText = count;
}

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("formMessage");

  if (name === "" || email === "") {
    msg.innerText = "Please fill all fields";
    msg.style.color = "red";
  } else {
    msg.innerText = "Success!";
    msg.style.color = "green";
  }
});