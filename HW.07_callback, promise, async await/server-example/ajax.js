function get() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/getData", false);
  xhr.send();
  console.log(xhr.responseText)
}

function send() {
  const user = {
    name: "Petro",
    age: 18
  }
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/postData", false);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(user));
  console.log("Function post", xhr.responseText)
}
