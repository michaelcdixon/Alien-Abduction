//PRICE FOR UPGRADES
//ABDUCTION
let score = 0;
let abductionCost = 10;
let abduction = 0;
//DRONES
let droneCost = 50;
let drones = 0;
//PROBING
let probingCost = 100;
let probing = 0;
//COWS
let cowCost = 250;
let cow = 0;
//CLONING
let cloningCost = 500;
let clones = 0;
//MODIFY
let modifyCost = 1000;
let modifications = 0;
//ASSIMILATE
let assimilateCost = 5000;
let assimilation = 0;
//PORTAL
let portalCost = 10000;
let portals = 0;
//COLONIZE
let colonizeCost = 50000;
let colonization = 0;
//TERRAFORM 
let terrafomrCost = 100000;
let terraformations = 0;

//MAKING ABDUCTION BUTTON
function buyAbduction() {
    if(score >= abductionCost) {
        score = score - abductionCost;
        abduction = abduction + 1
        abductionCost = Math.round(abductionCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("abductionCost").innerHTML = abductionCost;
        document.getElementById("abduction").innerHTML = abduction;
    }
}

//MAKING DRONES BUTTON   
function upgrade() {
    if(score >= droneCost) {
        score = score - droneCost;
        drones = drones + 1
        droneCost = Math.round(droneCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("droneCost").innerHTML = droneCost;
        document.getElementById("drone").innerHTML = drones;
    }
}

//MAKING PROBES BUTTON
function upgrade() {
    if(score >= probingCost) {
        score = score - probingCost;
        probing = probing + 1
        probingCost = Math.round(probingCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("probingCost").innerHTML = probingCost;
        document.getElementById("probing").innerHTML = probing;
    }
}
//MAKING COW BUTTON
function upgrade() {
    if(score >= cowCost) {
        score = score - probingCost;
        cow = cow + 1
        cowCost = Math.round(cowCost * 1.15);
        document.getElementById("score").innerHTML = score;
        document.getElementById("cowCost").innerHTML =cowCost;
        document.getElementById("cow").innerHTML = cow;
    }
}

//SETTING INCREMENTAL POINTS
setInterval(function() {
    score = score + abduction;
    document.getElementById("score").innerHTML = score;
},1000);

