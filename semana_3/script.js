// declaration of html object constants
const btn_more_info = document.getElementById("more_info")
const btn_close_welcome = document.getElementById("close_welcome_button")
const about_me_paragraph = document.getElementById("about_me_p2")
const section_proyects = document.getElementById("proyects")
const section_contact = document.getElementById("contact")
const welcome_div = document.getElementById("welcome")
// Text that is added to the more information paragraph
const more_info = `·💻 Im a Software Developer in training\n
    ·🔭 Im currently working on my education and personal projects\n
    ·🌱 Im currently learning Web development with Phyton\n
    ·👯 Im looking to collaborate on frontend engineering project\n
    ·🤔 Im looking for help with coding and creativity to every project I'm involved in\n
    ·💬 Ask me about web development, music and education\n
    ·📫 You can find me on GitHub, my user is: DanArci.\n
    ·😄 Pronouns: He/Him\n
    ·⚡ Fun fact: I started studying web development because of my guilty pleasure with Excel spreadsheets. 
    It's not actually a very funny fact.`
// Declaration of variables and conditions
let condition_more_info = false
let proyectsClose = true
let contactClose = true
// This function checks whether the paragraph with more information is open or closed, and does the opposite in each case.
function open_more_info() {
    if (condition_more_info) {
        about_me_paragraph.innerHTML = ""
        about_me_paragraph.style.transform = "translateX(-100vw)"
        condition_more_info = false
        btn_more_info.innerHTML = "Click for more info"
    } else {
        about_me_paragraph.innerHTML = more_info.replace(/\n/g, '<br>')
        about_me_paragraph.style.transform = "translateX(0)"
        condition_more_info = true
        btn_more_info.innerHTML = "Click for less info"
    }
}
// This complicated and poorly implemented function displays each section that is initially hidden. It takes as a parameter the section to be displayed.
// If another section is open, it closes it first to show the selected one.
function showSection(section) {
    if (section === "proyects") {
        section_proyects.style.transform = "translateX(0)"
        section_contact.style.transform = "translateX(150%)"
        section_proyects.style.zIndex = "4"
        section_contact.style.zIndex = "3"
        if (proyectsClose === false){ // This conditional checks if it's already open; if it is, then it closes it instead of opening it.
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
        if (contactClose === false){ // This conditional checks if it's already open; if it is, then it closes it instead of opening it.
            section_contact.style.transform = "translateX(150%)"
            section_contact.style.zIndex = "3"
            contactClose = true
            return
        } 
        contactClose = false
        proyectsClose = true
    } else if (section === "aboutme") { // This section closes all open sections to leave only the main "aboutme" page.
        section_contact.style.transform = "translateX(150%)"
        contactClose = true
        section_contact.style.zIndex = "3"
        section_proyects.style.transform = "translateX(150%)"
        proyectsClose = true
        section_proyects.style.zIndex = "3"
    }
}
// This function is called as soon as the body finishes loading and displays a div with a welcome message.
function welcomeTransition() {
    welcome_div.style.transform = "translateX(0)"
}
// This function is responsible for closing the welcome message when the X button is pressed.
btn_close_welcome.addEventListener("click", () => {
    welcome_div.style.display = "none"
})
// This listener displays the "More Information" paragraph each time the "More Information" button is pressed.
btn_more_info.addEventListener("click", open_more_info);


