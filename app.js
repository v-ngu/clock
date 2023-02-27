const clock = document.getElementById("clock");
const center = document.createElement("div");
center.setAttribute("id", "center")
clock.appendChild(center);

const createHandles = (name) => {
  const handle = document.createElement("div");
  handle.setAttribute("id", `${name}-handle`);
  clock.appendChild(handle);
}

createHandles("hours");
createHandles("minutes");
createHandles("seconds");

const hoursHandle = document.getElementById("hours-handle");
const minutesHandle = document.getElementById("minutes-handle");
const secondsHandle = document.getElementById("seconds-handle");

const rotateBy = (element, degrees) => {
  element.style.transform = `translateX(-50%) rotate(${degrees * 360}deg)`;
}

const setClock = () => {
  const date = new Date();
  const rotateSecondsBy = date.getSeconds() / 60;
  const rotateMinutesBy = (date.getMinutes() + rotateSecondsBy) / 60;
  const rotateHoursBy = (date.getHours() + rotateMinutesBy) / 12;
  rotateBy(secondsHandle, rotateSecondsBy);
  rotateBy(minutesHandle, rotateMinutesBy);
  rotateBy(hoursHandle, rotateHoursBy);
}

setClock();
setInterval(setClock, 1000);
