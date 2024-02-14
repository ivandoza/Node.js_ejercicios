const { EventEmitter } = require("node:events");

function createNewsFeed() {
  const emitter = new EventEmitter();

  setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  return emitter;
}

const news = createNewsFeed();

news.on("newsEvent", (data) => {
  console.log(data);
});

news.on("breakingNews", (data) => {
  console.log(data);
});

news.on("error", (error) => {
  console.error(error);
});