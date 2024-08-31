const contentModal = document.getElementById("writings-content-modal");

contentModal.addEventListener('click', (event) => { if (event.target === contentModal) contentModal.close() });
contentModal.addEventListener('close', () => document.documentElement.classList.remove('no-scroll'));

function createCard(title, footer, content) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener('click', () => {
        document.getElementById('writings-content-modal-title').innerText = title;
        document.getElementById('writings-content-modal-body').innerText = content;
        document.documentElement.classList.add('no-scroll');
        contentModal.showModal();
    });
    const cardTitle = document.createElement("h1");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = title;
    card.append(cardTitle);
    const cardFooter = document.createElement("footer");
    cardFooter.classList.add("card-footer");
    cardFooter.innerText = footer;
    card.append(cardFooter);
    document.getElementById("writings").getElementsByClassName("container")[0].append(card);
}

createCard("Hormones", 'shayri', "Maano na maano meri baatein\nGulabo ki tarah mehekti hai\nPar kitni baar batao tum ko ki inn\nGulabo ki tahani me kaatien bhi hote hai\nBaat me ek farmau\nAgar ruthe na ye sansar mujhse\nAgar ruthe gayi ye duniya toh fir\nBatau me ye baatein kisse\nLagte dono ek dusre ke liye hai\nLog kehte hai ye do dilo ka mel hai\nPyar vyar kuch nahi hota mere dost\nSab hormones ka khel hai");