const container = document.querySelector(".Our-values__card-container");

let isDragging = false;
let startX, scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  container.classList.add("grabbing");
});

container.addEventListener("mouseleave", () => {
  isDragging = false;
  container.classList.remove("grabbing");
});

container.addEventListener("mouseup", () => {
  isDragging = false;
  container.classList.remove("grabbing");
});

container.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2;
  container.scrollLeft = scrollLeft - walk;
});

function scrollTape(direction) {
  const scrollContainer = document.querySelector(".Tape__scroll");
  const cardWidth = 320;
  scrollContainer.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth",
  });
}
function toggleAnswer(question) {
  question.classList.toggle("active");
}

function handleFileSelect(event) {
  const fileInput = event.target;
  const fileNameDisplay = document.getElementById("file-name");

  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = `Выбранный файл: ${fileInput.files[0].name}`;
  } else {
    fileNameDisplay.textContent = "Файл не выбран";
  }
}
