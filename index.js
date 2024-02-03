const myvideo = document.getElementById("video");
const str = '祝你前程似锦\n带我赚大钱';
let i = 0;
const divTyping = document.getElementById('wish');
console.log(divTyping, 'divTyping');

function typing() {
    if (i <= str.length) {
        divTyping.innerHTML = str.slice(0, i++) + '_';
        setTimeout(typing, 200);
    } else {
        divTyping.innerHTML = str;
    }
}

function play() {
    myvideo.play();
    document.getElementById("top").classList.add("tran");
    document.getElementById("bottom").classList.add("trans");
    setTimeout(typing, 2 * 1000);
}