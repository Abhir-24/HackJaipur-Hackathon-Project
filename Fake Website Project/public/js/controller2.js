let hover = 0;
let singnup = document.querySelector("#signup");
singnup.style.border = "2px solid coral";
if (hover == 0) {
    singnup.addEventListener("mouseover", e => {
        if (hover == 0) {
            hover++;
            singnup.style.border = "2px solid green";
            alert("An Original Site Will Forward All Your Filled Details To your Mail As A Proof Of The Filled Details");
            alert("Click The Signup Link To Fill The Details");
        }
    });
}
