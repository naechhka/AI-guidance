// const burger = document.getElementById("burger-menu");
//     const nav = document.getElementById("nav");

//     burger.addEventListener("click", () => {
//     nav.classList.toggle("active");
// });

const sections = {
    docs: [
    "Meeting notes and minutes",
    "Survey responses (typed or transcribed)",
    "Reports, policies, and strategy documents",
    "Email threads or written feedback",
    "Publicly available data (e.g. council reports, census data)"
    ],

    audio: [
    "Voice recordings of interviews or focus groups (transcribed first — see below)", 

    "Community consultation recordings",
    "AI tools generally cannot process audio directly. You will need to transcribe recordings into text first, using a transcription tool such as Otter.ai, Microsoft Word's transcription feature, or Whisper (a free, open-source option). Once transcribed, the text can be uploaded or pasted into an AI tool."
    ],

    images: [
        "Photographs of handwritten notes or flipchart paper",
        "Scanned forms or feedback sheets",
        "Charts and graphs (AI can describe and interpret these)",
        "PDF documents containing text, tables, or images"
    ],

    sheets: [
        "CSV files or Excel spreadsheets with survey data",
        "Budget or expenditure data for impact reporting"
    ]
};

function updateText(key, element) {
    const data = sections[key];
    document.querySelector(".content-text").innerHTML = data.map(item => `<li class="paragraph-section">${item}</li>`).join("");
    setActive(element);
}

function setActive(element) {
    document.querySelectorAll(".feed-into-ai-menu-part").forEach(el => el.classList.remove("active"));
    element.classList.add("active");

}



document.querySelector(".docs-text").onclick = (e) => updateText("docs", e.currentTarget);
document.querySelector(".audio-voice").onclick = (e) => updateText("audio", e.currentTarget);
document.querySelector(".images-visual").onclick = (e) => updateText("images", e.currentTarget);
document.querySelector(".spewasheets-data").onclick = (e) => updateText("sheets", e.currentTarget);

updateText("docs", document.querySelector(".docs-text"));


const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {

    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {

        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        item.classList.toggle("active");

    });

});

const readMoreButton = document.querySelector(".read-more-button");
const usefulTipsContent = document.querySelector(".useful-tips");



readMoreButton.addEventListener("click", () => {

    usefulTipsContent.classList.toggle("active");
    
})


