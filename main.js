const dailyBtn = document.querySelector(".daily");
const weeklyBtn = document.querySelector(".weekly");
const monthlyBtn = document.querySelector(".monthly");
const hours = document.querySelectorAll(".hours-cont");
const lastH = document.querySelectorAll(".last-h-cont");
const text = document.querySelectorAll(".text");

console.log(hours);
window.addEventListener("load", (evt) => {
  getData("daily");
});

dailyBtn.addEventListener("click", function () {
  weeklyBtn.style.color = "#FAFAFA";
  dailyBtn.style.color = "#5858b4";
  monthlyBtn.style.color = "#FAFAFA";
  getData("daily");
});

monthlyBtn.addEventListener("click", function () {
  weeklyBtn.style.color = "#FAFAFA";
  dailyBtn.style.color = "#FAFAFA";
  monthlyBtn.style.color = "#5858b4";
  getData("monthly");
});

weeklyBtn.addEventListener("click", function () {
  weeklyBtn.style.color = "#5858b4";
  dailyBtn.style.color = "#FAFAFA";
  monthlyBtn.style.color = "#FAFAFA";
  getData("weekly");
});

function getData(time) {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      let i = 0;
      data.forEach((value) => {
        hours[i].textContent = value.timeframes[time].current;
        lastH[i].innerHTML = value.timeframes[time].previous;
        if (time == "daily") {
          text[i].innerHTML = "last day - ";
        } else if (time == "monthly") {
          text[i].innerHTML = "last month - ";
        } else {
          text[i].innerHTML = "last week - ";
        }
        i++;
      });
    });
}
