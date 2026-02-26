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

// pepefolder 내의 최신 이미지 리스트 (업데이트됨)
const pepeImages = [
    "pepefolder/feelsgoodman.png", "pepefolder/pepe_0.jpg", "pepefolder/pepe_1.jpg", "pepefolder/pepe_2.jpg",
    "pepefolder/pepe_3.jpg", "pepefolder/pepe_4.jpg", "pepefolder/pepe_5.jpg", "pepefolder/pepe_6.jpg",
    "pepefolder/pepe_7.jpg", "pepefolder/pepe_8.jpg", "pepefolder/pepe_10.jpg", "pepefolder/pepe_11.jpg",
    "pepefolder/pepe_12.jpg", "pepefolder/pepe_13.jpg", "pepefolder/pepe_14.jpg", "pepefolder/pepe_15.jpg",
    "pepefolder/pepe_17.jpg", "pepefolder/pepe_18.jpg", "pepefolder/pepe_20.jpg", "pepefolder/pepe_21.jpg",
    "pepefolder/pepe_22.jpg", "pepefolder/pepe_23.jpg", "pepefolder/pepe_24.jpg", "pepefolder/pepe_25.jpg",
    "pepefolder/pepe_26.jpg", "pepefolder/pepe_27.jpg", "pepefolder/pepe_28.jpg", "pepefolder/pepe_29.jpg"
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
if (!document.getElementById('fade-in-style')) {
    const style = document.createElement('style');
    style.id = 'fade-in-style';
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}
