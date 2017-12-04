
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
    var sponsor_text = document.getElementById("sponsor-text");

    if (stage == 0) {
        sponsor_text.innerText = "Gold Sponsors: "+gold_sponsors;
        stage = 1;
    }
    else if (stage == 1) {
        sponsor_text.innerText = "Silver Sponsors: "+silver_sponsors;
        //stage = 2;
        stage = 0;
    }
    else {
        sponsor_text.innerText = "Bronze Sponsors: "+bronze_sponsors;
        stage = 0;
    }
}
