

const spans = document.querySelectorAll(".favorite-icon");

spans.forEach((span) => {
  span.addEventListener("click", () => {
    if (span.classList.contains("filled")) {
      span.classList.remove("filled");
      span.innerHTML = "&#9825;"; 
    } else {
      span.classList.add("filled");
      span.innerHTML = "&#10084;";  
    }
  });
});
