let queue = [];
let current = null;

const card = document.getElementById("card");
const front = document.querySelector(".card-front");
const back = document.querySelector(".card-back");
let totalCards = 0;
let seenCards = 0;

const progress = document.getElementById("progress");

fetch(`/api/cards/${LEVEL}`)
    .then(res => res.json())
    .then(data => {
        queue = [...data];
totalCards = queue.length;
seenCards = 0;
updateProgress();
nextCard();

    });

function nextCard() {
    if (queue.length === 0) {
        front.innerText = "Session complete 🎉";
        back.innerHTML = "";
        return;
    }
    card.style.transform = "none";
card.style.opacity = "1";

    current = queue.shift();
    seenCards++;
updateProgress();
    front.innerText = current.german;
    back.innerHTML = `
    <div class="back-german">${current.german}</div>
    <div class="back-english">${current.english}</div>
    <div class="back-example">${current.example}</div>
    `;

    card.classList.remove("flipped");
}

card.addEventListener("click", () => {
    card.classList.toggle("flipped");
});

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") markKnown();
    if (e.key === "ArrowRight") markUnknown();
});

function markKnown() {
    updateBackend(true);

    card.classList.add("swipe-left");

    setTimeout(() => {
        card.classList.remove("swipe-left");

        if (current.ease < 3.8) {
            queue.push(current);
        }

        nextCard();
    }, 400);
}

function markUnknown() {
    updateBackend(false);

    card.classList.add("swipe-right");

    setTimeout(() => {
        card.classList.remove("swipe-right");

        queue.splice(2, 0, current);

        nextCard();
    }, 400);
}


function updateBackend(known) {
    fetch("/api/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: current.id,
            known: known
        })
    });
}
function updateProgress() {
    progress.innerText = `${seenCards} / ${totalCards}`;
}
