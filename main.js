function showMessage() {
    document.getElementById("message").innerText = "Feels Good Man! 🐸";
}

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
