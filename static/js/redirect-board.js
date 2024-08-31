
function createRedirectCard(title, link, previewHTMLObject){
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener('click', () => {
        window.open(link, '_blank')
    });
    const cardMain = document.createElement("div");
    cardMain.classList.add("card-main");
    cardMain.innerHTML = previewHTMLObject
    card.append(cardMain);
    const cardFooter = document.createElement("footer");
    cardFooter.classList.add("card-footer");
    cardFooter.innerText = title;
    card.append(cardFooter);
    document.getElementById("redirect-board").getElementsByClassName("container")[0].append(card);
}

createRedirectCard("My Repos", "https://github.com/iamansuman?tab=repositories", "<img src='./assets/socials/github.svg'/>");