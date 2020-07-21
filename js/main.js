// icon
const about = document.querySelector('#nav a:nth-child(1)');
const work_exp = document.querySelector('#nav a:nth-child(2)');
const portfolio = document.querySelector('#nav a:nth-child(3)');
const skills = document.querySelector('#nav a:nth-child(4)');
// page
const page_about = document.querySelector('#about');
const page_exp = document.querySelector('#work-exp');
const page_portfolio = document.querySelector('#portfolio');
const page_skills = document.querySelector('#skills');

//click event
about.onclick = () => {
    icon_reset();
    page_reset();
    about.classList.add("active");
    page_about.classList.remove("inactive");
};
work_exp.onclick = () => {
    icon_reset();
    page_reset();
    work_exp.classList.add("active");
    page_exp.classList.remove("inactive");
};
portfolio.onclick = () => {
    icon_reset();
    page_reset();
    portfolio.classList.add("active");
    page_portfolio.classList.remove("inactive");
};
skills.onclick = () => {
    icon_reset();
    page_reset();
    skills.classList.add("active");
    page_skills.classList.remove("inactive");
};

// function
function page_reset() {
    page_about.classList.add("inactive");
    page_exp.classList.add("inactive");
    page_portfolio.classList.add("inactive");
    page_skills.classList.add("inactive");
}
function icon_reset() {
    about.classList.remove("active");
    work_exp.classList.remove("active");
    portfolio.classList.remove("active");
    skills.classList.remove("active");
}

// portfolio redirection
const card_1 = document.querySelector('.card-1');
const card_2 = document.querySelector('.card-2');
const card_3 = document.querySelector('.card-3');
const card_4 = document.querySelector('.card-4');
const card_5 = document.querySelector('.card-5');
const card_6 = document.querySelector('.card-6');
const card_7 = document.querySelector('.card-7');

card_1.onclick = () => {
    window.open("http://220.128.133.15/s1080403/PS%20Store%20Redesign/")
}
card_2.onclick = () => {
    window.open("http://220.128.133.15/s1080403/07_Color%20Picker/")
}
card_3.onclick = () => {
    window.open("http://220.128.133.15/s1080403/04_Analog%20Clock/")
}
card_4.onclick = () => {
    window.open("http://220.128.133.15/s1080403/05_Digital%20Clock/")
}
card_5.onclick = () => {
    window.open("http://220.128.133.15/s1080403/02_Pop-up%20Game/")
}
card_6.onclick = () => {
    window.open("http://220.128.133.15/s1080403/06_Open%20API/")
}
card_7.onclick = () => {
    window.open("http://220.128.133.15/s1080403/01_v%20Card/")
}