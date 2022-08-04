// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function noneDefault(e) {
    e.preventDefault();
}

HREF_LINK.addEventListener('click', noneDefault);
INPUT_CHECKBOX.addEventListener('click', noneDefault);
INPUT_TEXT.addEventListener('keypress', (e) => {
    if(e.key !== 'a') {
        noneDefault(e);
    }
});
