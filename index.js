const instaTouch = require("instatouch");
require("dotenv").config();
const fs = require("fs");
const { get } = require("http");

async function getAllParticipants() {
  try {
    const options = {
      count: 100,
      session: process.env.INSTAGRAM_SESSION_ID,
    };
    const comments = await instaTouch.comments(
      "CSu7yIoHPoQfbU3wyR8LRTdwJyJcaKMD0u8qEg0",
      options
    );
    return comments.collector;
  } catch (error) {
    console.log(error);
  }
}

function getComent(participants) {
  const allParticipants = participants.length;
  const getRandomPicket = Math.floor(Math.random() * allParticipants);
  const picketWinner = participants[getRandomPicket];
  return picketWinner;
}

function winnerJason(winner) {
  fs.writeFile("winner.jason", JSON.stringify(winner, null, 2), function (err) {
    //CALLBACK FUNCTION
    if (err) console.log(err);
  });
}

async function main() {
  const participants = await getAllParticipants();
  const getWinner = getComent(participants);
  winnerJason(getWinner);
}

main();
