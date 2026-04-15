const botonMasInfo = document.getElementById("more_info")
const aboutMeParrafo = document.getElementById("about_me_p")
const normalInfo = `
Hi! I'm Daniel Arci, and this page was created as a personal portfolio of my projects developed during my studies at RIWI.
I'm a coder looking to become a developer at RIWI, and I'm currently learning Python, HTML, CSS, and JavaScript.
I hope to continue working and studying to achieve my goal of working for a major international technology company.`
const moreInfo = `
Hi! I'm Daniel Arci, and this page was created as a personal portfolio of my projects developed during my studies at RIWI. 
I'm a coder looking to become a developer at RIWI, and I'm currently learning Python, HTML, CSS, and JavaScript. 
I hope to continue working and studying to achieve my goal of working for a major international technology company.\n

    ·💻 Im a Software Developer in training\n
    ·🔭 Im currently working on my education and personal projects\n
    ·🌱 Im currently learning Web development with Phyton\n
    ·👯 Im looking to collaborate on frontend engineering project\n
    ·🤔 Im looking for help with coding and creativity to every project I'm involved in\n
    ·💬 Ask me about web development, music and education\n
    ·📫 You can find me on GitHub, my user is: DanArci.\n
    ·😄 Pronouns: He/Him\n
    ·⚡ Fun fact: I started studying web development because of my guilty pleasure with Excel spreadsheets. 
    It's not actually a very funny fact.`
let condition = false

function openMoreInfo() {
    if (condition) {
        aboutMeParrafo.innerHTML = normalInfo.replace(/\n/g, '<br>');
        condition = false
        botonMasInfo.innerHTML = "Click for more info"
    } else {
        aboutMeParrafo.innerHTML = moreInfo.replace(/\n/g, '<br>');
        condition = true
        botonMasInfo.innerHTML = "Click for less info"
    }
}

botonMasInfo.addEventListener("click", () => {
    openMoreInfo(condition)
});






