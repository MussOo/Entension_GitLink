if (localStorage.getItem("input_link_front") != null) {
  console.log(localStorage.getItem("input_link_front"));
  document.getElementById("input_link_front").value =
    localStorage.getItem("input_link_front");
}

if (localStorage.getItem("input_link_back") != null) {
  document.getElementById("input_link_back").value =
    localStorage.getItem("input_link_back");
}

document
  .getElementById("input_link_front")
  .addEventListener("input", function () {
    console.log("input_link_front");
    // get input text

    var input_text = document.getElementById("input_link_front").value;
    localStorage.setItem("input_link_front", input_text);
  });

// listen input text id is "input_link_back"
document
  .getElementById("input_link_back")
  .addEventListener("input", function () {
    console.log("input_link_back");
    // get input text
    var input_text = document.getElementById("input_link_back").value;

    localStorage.setItem("input_link_back", input_text);
  });

document
  .getElementById("input_issue_front")
  .addEventListener("input", function () {
    // get input text

    var input_text = document.getElementById("input_issue_front").value;
    localStorage.setItem("input_issue_front", input_text);
  });

document
  .getElementById("input_issue_back")
  .addEventListener("input", function () {
    // get input text

    var input_text = document.getElementById("input_issue_back").value;
    localStorage.setItem("input_issue_back", input_text);
  });

document.getElementById("btn_go_front").addEventListener("click", function () {
  open(
    localStorage.getItem("input_link_front") +
      localStorage.getItem("input_issue_front")
  );
});

document.getElementById("btn_go_back").addEventListener("click", function () {
  open(
    localStorage.getItem("input_link_back") +
      localStorage.getItem("input_issue_back")
  );
});
