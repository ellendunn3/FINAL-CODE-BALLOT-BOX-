const home = document.getElementById("home");    
const submit = document.getElementById("tracker");
submit.setAttribute("onclick", "createShamConsultation(event)"); // when clicked the words appear coming out of the box
document.body.setAttribute("onmousemove", "moveMe(event)"); // removed submit label so that the user can enter their name like an actual voting process
const words = [
    "freedom",
    "choice",
    "free",
    "fair",
    "vote",
    "a chance",
    "vote",
    "housing for all",
    "vote",
    "affordability",
    "change your society"
];
let intensity = 0;
