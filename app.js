let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      value.style.color = "red";
    } else if (styles.contains("increase")) {
      count++;
      value.style.color = "green";
    } else {
      count = 0;
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
