const endDate = new Date(2024, 2, 6, 22, 0, 0);
document.getElementById("end-date").innerText = endDate.toLocaleString();

const inputs = document.querySelectorAll("input");

function clock() {
    const now = new Date();
    const diff = Math.max(endDate - now, 0) / 1000; // ensuring the difference is not negative
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
    clock();
}, 1000);
