const prev = document.getElementById("preview-button");
prev.addEventListener ("click", () => {
    const title = document.querySelector(".title-text");
    const title_val = document.getElementById("title");
    title.innerHTML = title_val.value;

    const subtitle = document.querySelector(".subtitle-text");
    const subtitle_val = document.getElementById("subtitle");
    subtitle.innerHTML = subtitle_val.value;

    const to = document.querySelector(".to-text");
    const to_val = document.getElementById("to");
    to.innerHTML = to_val.value;

    const message = document.querySelector(".message-text");
    const message_val = document.getElementById("message");
    message.innerHTML = message_val.value;

    const from = document.querySelector(".from-text");
    const from_val = document.getElementById("from");
    from.innerHTML = from_val.value;
});

const sub = document.getElementById("submit-button");
sub.addEventListener ("click", (event) => {
    let cards = [];

    if (localStorage.getItem("cards") != null) {
        cards = JSON.parse(localStorage.getItem("cards"));
    }

    const title_val = document.getElementById("title").value;

    const subtitle_val = document.getElementById("subtitle").value;

    const to_val = document.getElementById("to").value;

    const message_val = document.getElementById("message").value;

    const from_val = document.getElementById("from").value;

    let card = {
        to: to_val,
        from: from_val,
        title: title_val,
        subtitle: subtitle_val,
        message: message_val
    }

    cards.push(card);

    localStorage.setItem("cards", JSON.stringify(cards));

})