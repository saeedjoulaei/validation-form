const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininMsg = document.querySelector(".signin-status");
const siginBtn = document.querySelector(".signin-button");

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

siginBtn.addEventListener("click", signin);

function signin(event) {
  event.preventDefault();
  passwordMsg.innerText = "";
  usernameMsg.innerText = "";
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;
  let ifSendData = true;

  if (regex.test(usernameValue) === false) {
    usernameMsg.innerText = "Please enter a valid email";
    ifSendData = false;
  }

  if (passwordValue.length === 0) {
    passwordMsg.innerText = "Please enter your password";
    ifSendData = false;
  } else if (passwordValue.length <= 4) {
    passwordMsg.innerText = "your password is too short";
    ifSendData = false;
  }

  if (ifSendData) {
    const body = JSON.stringify({
      username: usernameValue,
      password: passwordValue,
    });
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headers,
    }).then((response) => {
      if (response.ok === true) {
        sigininMsg.innerText = "you signed in successfully";
      }
    });
  }
}
