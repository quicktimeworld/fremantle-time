function updateClock(){

    let now = new Date();

    let time = now.toLocaleTimeString("en-AU", {
        timeZone: "Australia/Perth",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    let date = now.toLocaleDateString("en-AU", {
        timeZone: "Australia/Perth",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });


    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;
}


setInterval(updateClock,1000);
updateClock();
