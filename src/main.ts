import { endOfMinute } from "date-fns";

const container = document.getElementById("container");
const label = document.getElementById("text");
const scheduled = document.getElementById("scheduled");
const time = document.getElementById("time");

async function action() {
  updateUi("Waiting...", "salmon");

  await navigator.locks.request("my_resource", async () => {
    updateUi("Current leader!", "lightgreen");

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 10000);
    });
  });

  updateUi("Idle", "lightgray");
  schedule();
}

schedule();

function updateUi(text: string, color: string) {
  console.log(text);
  if (label) {
    label.textContent = text;
  }
  if (container) {
    container.style.backgroundColor = color;
  }
}

function schedule() {
  const now = new Date();
  const expireAt = endOfMinute(now);
  if (scheduled) {
    scheduled.textContent = expireAt.toLocaleString("de-CH", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }
  const expireIn = expireAt.getTime() - now.getTime();
  setTimeout(action, expireIn);
}

setInterval(() => {
  if (time) {
    time.textContent = new Date().toLocaleString("de-CH", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  }
}, 1000);
