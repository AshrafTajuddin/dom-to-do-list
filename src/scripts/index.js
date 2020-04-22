// Create a "close" button and append it to each list item
var myDoList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myDoList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myDoList[i].appendChild(span);
}

// To delete the list items
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" to list items
let checkedList = document.querySelector("ul");
checkedList.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myData").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Start your day with good thing yeah 🙂 👍");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myData").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7"); // https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}
