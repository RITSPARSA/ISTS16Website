
var stage = 0
var gold_sponsors = "Indeed, UTC Lenel Systems"
var silver_sponsors = "Amazon, Blackhills Info Sec, Blackstar Group, Carve Systems LLC"
var bronze_sponsors = ""


function thanksSponsors() {
    console.log("Our sponsors our awesome. We couldn't do it without them.");
    rotate_text();
    setInterval(rotate_text, 7000);

}

function rotate_text() {
    console.log("Rotating")
    var sponsor_starttext = document.getElementById("sponsor-start-text");
    var sponsor_revealtext = document.getElementById("sponsor-reveal-span");

    if (stage == 0) {
        sponsor_starttext.innerText = "Gold Sponsors: ";
        sponsor_revealtext.innerText = gold_sponsors;
        stage = 1;
    }
    else if (stage == 1) {
        sponsor_starttext.innerText = "Silver Sponsors: ";
        sponsor_revealtext.innerText = silver_sponsors;
        stage = 2;
    }
    else {
        sponsor_starttext.innerText = "Bronze Sponsors: ";
        sponsor_revealtext.innerText = bronze_sponsors;
        stage = 0;
    }
}
