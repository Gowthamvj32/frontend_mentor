let inputDay = document.getElementById("day");
let inputMonth = document.getElementById("month");
let inputYear = document.getElementById("year");
const dayLabel = document.getElementById("lDay");
const monthLabel = document.getElementById("lMonth");
const yearLabel = document.getElementById("lYear");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

//////////////////////////////////////////////////////
const curDate = new Date().getDate();
const curMonth = new Date().getMonth() + 1;
const curYear = new Date().getFullYear();

function foundError() {
  years.textContent = months.textContent = days.textContent = "--";
  yearLabel.style.color = "var(--Lightred)";
  inputYear.style.border = "1px solid var(--Lightred)";
  monthLabel.style.color = "var(--Lightred)";
  inputMonth.style.border = "1px solid var(--Lightred)";
  dayLabel.style.color = "var(--Lightred)";
  inputDay.style.border = "1px solid var(--Lightred)";
}
function noError() {
  yearLabel.style.color = "var(--Offblack)";
  inputYear.style.border = "1px solid var(--Lightgrey)";
  monthLabel.style.color = "var(--Offblack)";
  inputMonth.style.border = "1px solid var(--Lightgrey)";
  dayLabel.style.color = "var(--Offblack)";
  inputDay.style.border = "1px solid var(--Lightgrey)";
}

function displayResult(displayEl, inputEl, limit, current) {
  const inputValue = parseInt(inputEl.value);
  const result =
    isNaN(inputValue) || inputEl.value.trim() === "" || inputValue >= limit
      ? "--"
      : Math.abs(current - inputValue);

  displayEl.textContent = result;
  if (typeof result === "number") inputEl.value = "";
}

function handleErrors(inputEl, inputLabel, limit, errorMessage) {
  const message = document.createElement("p");
  message.classList.add("warning");

  // Remove existing warning message
  const existingMessage = inputEl.parentNode.querySelector(".warning");
  if (existingMessage) {
    existingMessage.remove();
    inputLabel.style.color = "var(--Offblack)";
    inputEl.style.border = "1px solid var(--Lightgrey)";
    noError();
  }

  // Check for errors and display new warning message
  if (inputEl.value.trim() === "") {
    message.textContent = "This field is required";
    inputEl.parentNode.appendChild(message);
    foundError();
  } else if (inputEl.value >= limit) {
    message.textContent = errorMessage;
    inputEl.parentNode.appendChild(message);
    foundError();
  }
}

function calcAge(e) {
  e.preventDefault();

  // Handling Errors
  handleErrors(inputDay, dayLabel, 32, "Must be a valid date");
  handleErrors(inputMonth, monthLabel, 13, "Must be a valid month");
  handleErrors(inputYear, yearLabel, curYear, "Must be in the past");
  // Displaying Result only if there are no errors
  displayResult(days, inputDay, 32, curDate);
  displayResult(months, inputMonth, 13, curMonth);
  displayResult(years, inputYear, curYear, curYear);

  if (
    days.textContent === "--" ||
    months.textContent === "--" ||
    years.textContent === "--"
  ) {
    days.textContent = months.textContent = years.textContent = "--";
  }
}
