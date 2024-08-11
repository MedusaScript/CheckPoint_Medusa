document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

async function bypassUrl() {
    const urlInput = document.getElementById('url-input').value.trim();
    const apiUrl = `https://external-x-brutalityhubv2.vercel.app/api/bypass?url=${encodeURIComponent(urlInput)}`;
    showNotification();

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        console.log("API Response:", data); // Debugging line

        const resultText = document.getElementById('result-text');
        const redirectBtn = document.getElementById('redirect-btn');
        const copyBtn = document.getElementById('copy-btn');

        if (data.result) {
            resultText.innerText = `Bypassed URL: ${data.result}`;
            redirectBtn.setAttribute('onclick', `redirect('${data.result}')`);
            copyBtn.setAttribute('onclick', `copyToClipboard('${data.result}')`);
        } else {
            resultText.innerText = `Could not bypass the URL.`;
        }

        document.getElementById('result-card').classList.remove('hidden');
    } catch (error) {
        const resultText = document.getElementById('result-text');
        resultText.innerText = `Error: ${error.message}`;
        document.getElementById('result-card').classList.remove('hidden');
    }
}

function redirect(url) {
    window.open(url, '_blank');
}

function copyToClipboard(url) {
    const tempInput = document.createElement('input');
    tempInput.value = url;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    showCopyNotification();
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    setTimeout(() => {
        hideNotification();
    }, 3000);
}

function hideNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('hidden');
}

function showCopyNotification() {
    const copyNotification = document.getElementById('copy-notification');
    copyNotification.innerText = 'Copied to clipboard!';
    copyNotification.classList.remove('hidden');

    setTimeout(() => {
        hideCopyNotification();
    }, 5000);
}

function hideCopyNotification() {
    const copyNotification = document.getElementById('copy-notification');
    copyNotification.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const bypassText = document.getElementById('bypass-text');
    const texts = ['Linkvertise', 'Rekonise', 'MBoost', 'Boost.ink', 'Sub2Get', 'SocialWolvez', 'Work.ink', 'v.gd', 'tinyurl.com', 'rebrand.ly', 'is.gd', 'tinylink.onl', 'Valyse', 'Codex', 'MediaFire', 'Lootlabs', 'Social-Unlock.com', 'AdFocus', 'Fluxus', 'PasteDrop', 'Pastebin', 'Sub2Unlock', 'SubUnlock', 'PlatoBoost', 'Key RBLX', 'Arceus', 'PandaDev']; 
    let index = 0;

    function updateText() {
        const prefix = 'Bypass ';
        const bypassedPart = texts[index];

        bypassText.innerHTML = `<span class="prefix">${prefix}</span><span class="bypassed">${bypassedPart}</span>`;
        index = (index + 1) % texts.length; 
    }

    updateText();

    setInterval(updateText, 2000);
});
