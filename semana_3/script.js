const botonMasInfo = document.getElementById("more_info")
const aboutMeParrafo = document.getElementById("about_me_p2")
const aboutMeDiv = document.getElementById("about_me_div")
const section_proyects = document.getElementById("proyects")
const section_about_me = document.getElementById("about_me")
const section_contact = document.getElementById("contact")
const welcome_div = document.getElementById("welcome")
const close_welcome_button = document.getElementById("close_welcome_button")
let condition = false

const moreInfo = `·💻 Im a Software Developer in training\n
    ·🔭 Im currently working on my education and personal projects\n
    ·🌱 Im currently learning Web development with Phyton\n
    ·👯 Im looking to collaborate on frontend engineering project\n
    ·🤔 Im looking for help with coding and creativity to every project I'm involved in\n
    ·💬 Ask me about web development, music and education\n
    ·📫 You can find me on GitHub, my user is: DanArci.\n
    ·😄 Pronouns: He/Him\n
    ·⚡ Fun fact: I started studying web development because of my guilty pleasure with Excel spreadsheets. 
    It's not actually a very funny fact.
`

function openMoreInfo() {
    if (condition) {
        aboutMeParrafo.innerHTML = ""
        aboutMeParrafo.style.transform = "translateX(-100vw)"
        condition = false
        botonMasInfo.innerHTML = "Click for more info"
    } else {
        aboutMeParrafo.innerHTML = moreInfo.replace(/\n/g, '<br>')
        aboutMeParrafo.style.transform = "translateX(0)"
        condition = true
        botonMasInfo.innerHTML = "Click for less info"
    }
}
let proyectsClose = true
let contactClose = true
function showSection(section) {
    if (section === "proyects") {
        section_proyects.style.transform = "translateX(0)"
        section_contact.style.transform = "translateX(150%)"
        section_proyects.style.zIndex = "4"
        section_contact.style.zIndex = "3"
        if (proyectsClose === false){
            section_proyects.style.transform = "translateX(150%)"
            section_proyects.style.zIndex = "3"
            proyectsClose = true
            return
        } 
        proyectsClose = false
        contactClose = true
    } else if (section === "contact") {
        section_contact.style.transform = "translateX(0)"
        section_proyects.style.transform = "translateX(150%)"
        section_contact.style.zIndex = "4"
        section_proyects.style.zIndex = "3"
        if (contactClose === false){
            section_contact.style.transform = "translateX(150%)"
            section_contact.style.zIndex = "3"
            contactClose = true
            return
        } 
        contactClose = false
        proyectsClose = true
    } else if (section === "aboutme") {
        section_contact.style.transform = "translateX(150%)"
        contactClose = true
        section_contact.style.zIndex = "3"
        section_proyects.style.transform = "translateX(150%)"
        proyectsClose = true
        section_proyects.style.zIndex = "3"
    }
}

function welcomeTransition() {
    welcome_div.style.transform = "translateX(0)"
}

close_welcome_button.addEventListener("click", () => {
    welcome_div.style.display = "none"
})
botonMasInfo.addEventListener("click", openMoreInfo);


