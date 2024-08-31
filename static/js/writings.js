const writings = [
    ['shayri', 'Hormones', [
        "Maano na maano meri baatein",
        "Gulabo ki tarah mehekti hai",
        "Par kitni baar batao tum ko ki inn",
        "Gulabo ki tahani me kaatien bhi hote hai\n",
        "Baat me ek farmau",
        "Agar ruthe na ye sansar mujhse",
        "Agar ruthe gayi ye duniya toh fir",
        "Batau me ye baatein kisse\n",
        "Lagte dono ek dusre ke liye hai",
        "Log kehte hai ye do dilo ka mel hai",
        "Pyar vyar kuch nahi hota mere dost",
        "Sab hormones ka khel hai",
    ].join('\n')],
    ['shayri', 'Dark Energy', [
        "Naaraz hai kya zindagi mujhse",
        "Batana zara ruthe hue kyu ho tum",
        "Dil darzano ka bojh utha raha hai",
        "Aur yaha toffe me mil rahe hai bas gum\n",
        "Ek iltezaa hai mera",
        "Iqraar kar lo tum",
        "Bas ruthne ki wajah bata do",
        "Agge mana lenge tumko hum"
    ].join('\n')],
];

const contentModal = document.getElementById("writings-content-modal");

contentModal.addEventListener('click', (event) => { if (event.target === contentModal) contentModal.close() });
contentModal.addEventListener('close', () => document.documentElement.classList.remove('no-scroll'));

function createWriteCard(title, footer, content) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener('click', () => {
        document.getElementById('writings-content-modal-title').innerText = title;
        document.getElementById('writings-content-modal-body').innerText = content;
        document.documentElement.classList.add('no-scroll');
        contentModal.showModal();
    });
    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-main");
    cardTitle.innerText = title;
    card.append(cardTitle);
    const cardFooter = document.createElement("footer");
    cardFooter.classList.add("card-footer");
    cardFooter.innerText = footer;
    card.append(cardFooter);
    document.getElementById("writings").getElementsByClassName("container")[0].append(card);
}

for (let i = 0; i < writings.length; i++) createWriteCard(writings[i][1], writings[i][0], writings[i][2]);