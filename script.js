
const questions = [
  {
    q: "A stranger sends you a inappropiate message. What should you do?",
    options: ["Reply and keep chatting", "Ignore and tell an adult"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg",
    character: "https://picsum.photos/100/120?random=11"
  },
  {
    q: "A game chat asks for your home address. What should you do?",
    options: ["Share your address", "Keep it private"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg",
    character: "https://picsum.photos/100/120?random=12"
  },
  {
    q: "You get a friend request from someone you don’t know. Safe choice?",
    options: ["Accept", "Decline"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg",
    character: "https://picsum.photos/100/120?random=13"
  },
  {
    q: "What if someone asks you to meet in person after online chatting?",
    options: ["Refuse and tell an adult", "Agree to meet them alone"],
    correct: 0,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg",
    character: "https://picsum.photos/100/120?random=14"
  },
  {
    q: "A website asks for your phone number. What should you do?",
    options: ["Give it", "Ask an adult first"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg",
    character: "https://picsum.photos/100/120?random=15"
  },
  {
    q: "Should you share your password with friends?",
    options: ["Yes", "No"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg",
    character: "https://www.shutterstock.com/image-vector/little-crying-boy-childrens-mood-600nw-1074385898.jpg"
  },
  {
    q: "You see a pop-up offering a free phone. What’s the safe action?",
    options: ["Click it", "Close it"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg",
    character: "https://picsum.photos/100/120?random=17"
  },
  {
    q: "Your classmate is posting embarrassing photos online. What should you do?",
    options: ["Ignore and let it continue", "Tell a teacher or trusted adult"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg",
    character: "https://picsum.photos/100/120?random=18"
  },

  {
    q: "You receive a message from a f  riend asking for money. What should you do?",
    options: ["Send money", "Verify with your friend in person"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg ",
  },
  {
  q:"What if someone asks you to do something that doesn’t feel right online?",
    options: ["Do it to avoid conflict", "Stop and tell an adult"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg"
  },

  {
    q:"What should you do if you see cyberbullying happening?",
    options: ["Join in to fit with the group", "Report it to a trusted adult"],
    correct: 1,
    bg: "https://img.freepik.com/premium-photo/cartoon-boy-working-laptop-room-with-plant-plant_1328214-2195.jpg"
  },

];

let current = 0;
let score = 0;

function loadQuestion() {
  if (current < questions.length) {
    const q = questions[current];
    document.getElementById("question").innerText = q.q;
    document.querySelectorAll("button")[0].innerText = q.options[0];
    document.querySelectorAll("button")[1].innerText = q.options[1];
    document.getElementById("scene-img").src = q.bg;
    document.getElementById("character-img").src = q.character;
    document.getElementById("feedback-img").style.display = "none";
    document.getElementById("result").innerText = `Question ${current+1} of ${questions.length}`;
  } else {
    document.getElementById("question").innerText = "🎉 Lesson complete!";
    document.querySelectorAll("button").forEach(btn => btn.style.display = "none");
    document.getElementById("scene-img").style.display = "none";
    document.getElementById("character-img").style.display = "none";
    document.getElementById("feedback-img").style.display = "none";
    document.getElementById("result").innerText = `Your final score: ${score} / ${questions.length}`;
  }
}

function checkAnswer(choice) {
  const fimg = document.getElementById("feedback-img");
  fimg.style.display = "block";

  if (choice === questions[current].correct) {
    fimg.src = "https://thumbs.dreamstime.com/b/happy-cartoon-boy-giving-thumbs-up-vector-illustration-adorable-brown-hair-gesture-big-smile-376266904.jpg"; // happy
    score++;
  } else {
    fimg.src = "https://png.pngtree.com/png-vector/20220926/ourmid/pngtree-kid-crying-and-standing-drawn-in-cute-style-png-image_6217272.png"; // sad
  }

  setTimeout(() => {
    current++;
    loadQuestion();
  }, 1000);
}

// start game
window.onload = loadQuestion;