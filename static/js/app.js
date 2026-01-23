function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText =
        now.toLocaleTimeString();
}

function updateDate() {
    const now = new Date();
    document.getElementById("date").innerText =
        now.toDateString();
}

fetch("/data/prayers.json")
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector("#prayers tbody");
        for (const [name, time] of Object.entries(data)) {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${name}</td><td>${time}</td>`;
            tbody.appendChild(row);
        }
    });

setInterval(updateClock, 1000);
updateClock();
updateDate();
