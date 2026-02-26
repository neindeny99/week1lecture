function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Update button text
    const btn = document.querySelector('.dark-mode-toggle button');
    if (body.classList.contains('dark-mode')) {
        btn.innerText = "라이트 모드로 전환";
    } else {
        btn.innerText = "다크 모드로 전환";
    }
}

const pepeImages = [
    "https://upload.wikimedia.org/wikipedia/en/6/63/Feels_good_man.jpg",
    "https://i.kym-cdn.com/entries/icons/original/000/000/142/feelsgoodman.png",
    "https://i.kym-cdn.com/entries/icons/mobile/000/005/365/pepe.jpg",
    "https://i.kym-cdn.com/entries/icons/original/000/017/618/pepethefrog.png",
    "https://i.kym-cdn.com/photos/images/newsfeed/000/943/273/608.jpg",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/043/247/5e3.jpg",
    "https://i.kym-cdn.com/photos/images/newsfeed/000/915/652/b4d.jpg",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/006/537/10b.jpg"
];

function showRandomPepe() {
    const container = document.getElementById("pepe-container");
    const randomIndex = Math.floor(Math.random() * pepeImages.length);
    const selectedImg = pepeImages[randomIndex];
    
    container.innerHTML = `
        <img src="${selectedImg}" alt="랜덤 페페" style="width: 100%; max-width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); animation: fadeIn 0.5s;">
        <p style="margin-top: 10px; font-weight: bold; color: #2e8b57;">Feels Good Man! 🐸</p>
    `;
}

// Add fadeIn animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
