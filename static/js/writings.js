const writings = [
    ['shayri', 'Hormones', '', [
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
    ['shayri', 'Dark Energy', '',[
        "Naaraz hai kya zindagi mujhse",
        "Batana zara ruthe hue kyu ho tum",
        "Dil darzano ka bojh utha raha hai",
        "Aur yaha toffe me mil rahe hai bas gum\n",
        "Ek iltezaa hai mera",
        "Iqraar kar lo tum",
        "Bas ruthne ki wajah bata do",
        "Agge mana lenge tumko hum"
    ].join('\n')],
    ['poem', 'Divine Soul', '', [
        "In this lonely world of mine",
        "Where this soul tries to find",
        "Neither ruby, silver or gold",
        "But another soul divine.\n",
        "The holy soul tries hard",
        "But in this world of vicious",
        "It fails so many times",
        "He gives up for a moment",
        "Thinking he will be fine.\n",
        "But in the corner of his heart",
        "He wails so many times",
        "And this cruel world",
        "Fails to understand his mind",
        "He gives up for a moment",
        "Thinking he will be fine\n",
        "And again",
        "This soul tries hard to find",
        "Neither ruby, silver or gold",
        "But another soul divine",
        "But another soul divine"
    ].join('\n')],
    ['song', 'Unsaid Rules', 'https://suno.com/s/LpevCKeElwF0axWi', [
        "[INTRO]",
        "Remember",
        "Remember when we met - first - in high school",
        "We were nothing but just stran-gers",
        "Hiding~ ourselves behind all those covers",
        "Just two random souls in[nn] sight\n",
        "[VERSE 1]",
        "Hello",
        "Hello, I'm someone from nowhere",
        "I just came here with the river's flow",
        "Drifting sweet and slow",
        "Now it feels~ so~ nice~ to talk to you",
        "(talk to you)\n",
        "[BRIDGE]",
        "Oh my~~ I haven't been so braver (so braver)",
        "Oh my~~ look what I have just endeavoured (just endeavoured)",
        "(Ouggghhhh)",
        "Just like Athena and Aphrodite",
        "We promised to keep our rules in mind",
        "Don't you hate it seeing me cry (ohh~)\n",
        "[CHORUS 1]",
        "So why~~ (why)",
        "Why you broke our unsaid rules~ (unsaid rules)",
        "and I~",
        "Believed we would always be together",
        "Holding hands forever",
        "But that was nothing but a dream\n",
        "[OUTRO]",
        "I~ I haven't been so braver",
        "Oh my~ look what I have just endeavoured\n",
        "Holding hands forever",
        "But that was nothing but a~ - dream",
    ].join('\n')],
];

const contentModal = document.getElementById("writings-content-modal");

contentModal.addEventListener('click', (event) => { if (event.target === contentModal) contentModal.close() });
contentModal.addEventListener('close', () => document.documentElement.classList.remove('no-scroll'));

function createWriteCard(title, footer, content, link) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener('click', () => {
        document.getElementById('writings-content-modal-title').innerText = title;
        document.getElementById('writings-content-modal-body').innerText = content;
        document.getElementById('writings-content-modal-link').hidden = (link == '');
        document.getElementById('writings-content-modal-link').href = link;
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

for (let i = 0; i < writings.length; i++) createWriteCard(writings[i][1], writings[i][0], writings[i][3], writings[i][2]);
