let cards = JSON.parse(localStorage.getItem("cards"));

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let template = document.getElementById("card-template");
    let cardView = template.content.cloneNode(true);
    
    let titleText = cardView.querySelector(".title-text");
    titleText.textContent = card.title;
    let subtitleText = cardView.querySelector(".subtitle-text");
    subtitleText.textContent = card.subtitle;
    let toText = cardView.querySelector(".to-text");
    toText.textContent = card.to;
    let messageText = cardView.querySelector(".message-text");
    messageText.textContent = card.message;
    let fromText = cardView.querySelector(".from-text");
    fromText.textContent = card.from;

    let deleteBtn = cardView.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        cards.splice(i, 1);
        localStorage.setItem("cards", JSON.stringify(cards));
        location.reload();
    });

    document.getElementById("card-list").appendChild(cardView);
}