const opening = document.getElementById("opening");
const pinButton = document.getElementById("pinButton");

pinButton.addEventListener("click", checkPIN);

document.getElementById("pinInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") checkPIN();
});

function checkPIN() {
    const pin = document.getElementById("pinInput").value;
    const message = document.getElementById("pinMessage");

    if (pin === "151108") {
        showHearts();
    } else {
        message.textContent = "Eitsss, salahh! Coba lagiii 🤭";
        document.getElementById("pinInput").value = "";
    }
}

function showHearts() {
    opening.innerHTML = `
        <div class="heart-animation" id="heartAnimation"></div>
        <h1 class="animation-title">A little love for you! ♡</h1>
    `;

    const animation = document.getElementById("heartAnimation");

    for (let i = 0; i < 35; i++) {
        const heart = document.createElement("div");
        heart.className = "pixel-heart";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 0.8 + "s";
        heart.style.width = (12 + Math.random() * 18) + "px";
        heart.style.height = heart.style.width;
        animation.appendChild(heart);
    }

    setTimeout(showHedgehog, 2600);
}

function showHedgehog() {
    opening.innerHTML = `
        <p class="small-title">Wait for it...</p>
        <h1>Someone is coming! ♡</h1>

        <div class="hedgehog-track">
            <span class="hedgehog">🦔🎁</span>
        </div>

        <p class="description">A little friend is on the way!</p>
    `;

    setTimeout(showQuestion, 4200);
}

function showQuestion() {
    opening.innerHTML = `
        <p class="small-title">One Little Question</p>
        <h1>Jia sayang Nisa gaa?</h1>
        <h2>♡</h2>

        <div class="choice-buttons">
            <button class="choice" id="choice2">
                Sayang banget bangett haha ♡
            </button>
        </div>
    `;

    document.getElementById("choice2")
        .addEventListener("click", chooseAnswer);
}

function chooseAnswer() {
    opening.innerHTML = `
        <p class="small-title">Hehehe ketahuan!</p>
        <h1>HAHAHA! ♡</h1>
        <h2>Thank You, Jiaaa!</h2>
        <p class="description">Sekarang buka surat dari Nisa yaaa!</p>

        <button id="letterButton">Open Your Letter ♡</button>
    `;

    document.getElementById("letterButton")
        .addEventListener("click", showLetter);
}

function showLetter() {
    opening.innerHTML = `
        <div class="letter">
            <p class="small-title">A Special Letter For You</p>
            <h1>Happy Birthday</h1>
            <h2>Jiaaa ♡</h2>

            <div class="letter-content">
                <p>happy birthday jii. nambah umur, nambah segala² nyaa. semogaa semua hal baik, semua hal menyenangkan, semua hal istimewa akan datang ke hidup jiaa setiap harinya. yaa gausah tanya, nisaa sayang kali kali kali ma kee. sehat-sehat yaa. jii cuma mau satu nisaa,ke bahagia udah itu ajaa.ke mau buat apa buatlah, ga marah mau ke pake nama jia. kalo ada yang jahati. ke bilang apalagi si dapaa, nisaa yang maki² dia nanti tenang. dapaa GAMAU TAU KE HARUS JAGA JIA NISA, AWAS JAA YAA.MUSUHAN KITA KALO KE JAHAT MA JIA. jiaa nisaa tuu....</p>

                <p>jii ayoo bareng-bareng sampee ke nikah beranak bercucu nanti hahaa. ke luan nikah yaa. nisaa mau jadi onty-onty rich nanti. tenang anak ke aman ma nisaa. ke nge date jaa nanti. ahahhaaa.. kangen kali ma ke, ke ga kangen nisa masaa, jahat.. yaudaa sii.. pokoknyaa doa terbaik, segalaa doa tuk ke. dan jangan lupa doain nisa jugaa.</p>

                <p>bismillah lulus tepat waktu, CUMLAUDE AAMINN.. ipk 4 yaa allah.. mudahin segala urusan di uin ini yaa allah. dan bismillah cebol usk taun depan di fkip usk bahasa Indonesia dan nisa di feb usk bisnis digital. aaaaminn... gamau tauu ke harus ingat nisaa sampee kapan-kapan. dan yaa ini effort buatnyaa ke harus liatt... banyakk bet masii pen ketikk tapii dah jam 2 malamm,tepar nisa besok. btww² ada hadiahh tapi kek diluar dugaann ,jangan marah yaa, nisaa dah mikir lamaa,eh aduh malah gini, dan jangan ketawain nisaa plss. maluu... yaudaa babaii...selamat pagi, selamat malamm, selamat ulang tahun intinyaaa cintaa nya dapa. nisa ngalah deh 😔. muachh</p>
            </div>
        </div>

        <button id="envelopeButton">Eh, ada satu lagi... 💌</button>
    `;

    document.getElementById("envelopeButton")
        .addEventListener("click", showEnvelope);
}

function showEnvelope() {
    opening.innerHTML = `
        <p class="small-title">A Little Secret</p>
        <h1>For Jiaaa ♡</h1>

        <div class="envelope" id="envelope">
            <div class="envelope-flap"></div>
            <div class="envelope-paper">💌</div>
        </div>

        <p class="description">Coba buka surat rahasianyaaa!</p>
        <button id="secretButton">Open the Secret ♡</button>
    `;

    document.getElementById("secretButton")
        .addEventListener("click", showSecret);
}

function showSecret() {
    opening.innerHTML = `
        <p class="small-title">Secret Message ♡</p>
        <h1>Hehehe!</h1>
        <div class="secret-card">
            <h2>Jiaaa!</h2>
            <p>Jangan lupa bahagiaaa. Terima kasih sudah jadi bagian dari cerita Nisa. Semoga kita tetap jadi teman sampai tua nanti! ♡</p>
            <p>— dari Nisa yang banyak tingkah</p>
        </div>

        <button id="nextButton">Lanjuttt! ♡</button>
    `;

    document.getElementById("nextButton")
        .addEventListener("click", showSecondHedgehog);
}

function showSecondHedgehog() {
    opening.innerHTML = `
        <p class="small-title">WAIT WAIT WAIT!</p>
        <h1>Nisa belum selesaiii!!</h1>

        <div class="hedgehog-track">
            <span class="hedgehog">🦔🎁</span>
        </div>

        <p class="description">Masih ada satu kejutan lagiii!</p>
    `;

    setTimeout(showParty, 4000);
}

function showParty() {
    opening.innerHTML = `
        <div class="party">
            <div class="balloons">
                <span>🎈</span>
                <span>🎈</span>
                <span>🎈</span>
                <span>🎈</span>
                <span>🎈</span>
            </div>

            <div class="confetti">🎊 ✨ 🎉 ✨ 🎊</div>

            <p class="small-title">Today Is Your Special Day</p>
            <h1>HAPPY BIRTHDAY</h1>
            <h2>JIAAAA!! ♡</h2>

            <p class="description">
                Semoga hari-harimu selalu dipenuhi hal baik.
                Stay happy, Jiaaa! ♡
            </p>

            <div class="party-decoration">🎂 🧸 🎁</div>
            <p class="small-title">With love, Nisa ♡</p>
        </div>
    `;
}