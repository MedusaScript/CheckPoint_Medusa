document.addEventListener('DOMContentLoaded', () => {
    // Array dari teks yang akan berganti-ganti
    const texts = [
        'Linkvertise', 'Fluxus', 'Delta', 'Rekonise', 'MBoost', 'Boost.ink', 'Sub2Get', 
        'SocialWolvez', 'Work.ink', 'v.gd', 'tinyurl.com', 'rebrand.ly', 
        'is.gd', 'tinylink.onl', 'Valyse', 'MediaFire', 'Lootlabs', 
        'Social-Unlock.com', 'AdFocus', 'PasteDrop', 'Pastebin', 
        'Sub2Unlock', 'SubUnlock', 'Key RBLX', 'Arceus X'
    ];

let textIndex = 0;
const bypassTextElement = document.getElementById('bypass-text');

function changeText() {
    bypassTextElement.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
    }

    setInterval(changeText, 3000); // Ganti teks setiap 3 detik
    changeText(); // Panggil sekali untuk menampilkan teks pertama kali
});

const inputBox = document.getElementById("input-box");

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getKey();
    }
});

function getKey() {
    const link = inputBox.value;
    inputBox.disabled = true;
    inputBox.value = "Starting, By Medusa Script";
    inputBox.style.textAlign = "center";

    setTimeout(() => {
        fetch(`https://external-x-brutalityhubv2.vercel.app/api/bypass?url=${encodeURIComponent(link)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Error Please get new link");
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Debugging: Periksa struktur data
                let result = data.result; // Kunci 'result' sesuai dengan API
                const apiResponseElement = document.querySelector(".api-response");

                if (apiResponseElement) {
                    apiResponseElement.value = result; // Mengupdate elemen input atau textarea
                } else {
                    console.error("Element with class .api-response not found.");
                }

                inputBox.value = "Successfully";
                inputBox.disabled = false;
            })
            .catch(error => {
                console.error("Sorry, wait for update:", error);
                inputBox.value = "Sorry, wait for update";
                inputBox.disabled = false;
            });
    }, 3000);
}

function copyText() {
    const input = document.querySelector(".api-response");
    navigator.clipboard.writeText(input.value)
        .then(() => alert("Bypass has been successfully copied to clipboard"))
        .catch(error => console.error("Error copying text:", error));
}
