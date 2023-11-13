document.addEventListener("DOMContentLoaded", function() {
let fishCount = 0;
let fishsPerSecond = 0;
    let firstUpgradeBought = false; // Variable to track if the first upgrade has been bought
 let voidNetBought = false;    
const titles = [" the Angler", " the Fishcatcher", " the Rodmaster", " the Deep Diver", " the Tide Titan", " the Fishcharmer", " the Crab", " the Lobster", " the Whale", " the Fishsinger", " the Fishkisser", " the Fishlover", " the Troutist", " the Angry Minnow", " the Lure King", " the Baiter", " the Master Baiter", " the Lucky", " the Frog", " the Shoe", " the Fishmonger"];
    let playerName = prompt("Welcome to Fisherclicking! Enter your player name:");
    let randomTitle = titles[Math.floor(Math.random() * titles.length)]; // Randomly select a title
    let companyName = playerName + randomTitle;
    document.getElementById("companyName").innerText = companyName;
const originalHTML = document.body.innerHTML;


const fishFacts = [
    "There are over 34,000 recognized species of fish swimming in our oceans, rivers, and lakes!",
    "The parrotfish sleeps in a bubble!",
    "If the dominant female clowfish dies, the largest male will become a female. Finding Nemo needs a rewrite!",
    "ZZZAPP! The electric eel can produce shocks of up to 600 volts to navigate and find prey!",
    "The Mantis Shrimp has the world's fastest punch, reaching speeds of 50 mph! Not bad for a little guy!",
    "The blobfish may look attractive, but its appearance is a result of the pressure difference between its deep-sea habitat and the surface!",
    "The Archerfish shoots down insects above the water's surface by spitting a jet of water like a Pokémon!",
    "Fish have taste buds all over their bodies, not just in their mouths. Ew!",
    "The Greenland Shark is one of the longest-living vertebrates, but the Iceland Shark is very nice!",
    "The male seahorse has a specialized pouch where the female deposits her eggs for him to fertilize!",
    "Some fish can produce antifreeze proteins that prevent their blood from freezing in cold waters. Don't put that in your car!",
    "The Pufferfish contains a deadly poison, tetrodotoxin, that became popular in assassinations after an episode of The Simpsons!",
    "The cleaner wrasse is like a fish spa therapist! It picks parasites off larger fish, benefiting both parties in a symbiotic relationship.",
    "The lungfish can survive out of water by breathing air becasue it actually has a lung!",
    "The Catfish has taste buds on its whiskers, helping it locate cat food in murky waters.",
    "The Siamese Fighting Fish builds bubble nests at the water's surface for its eggs.",
    "The incredible migratory journey of the Salmon can span thousands of miles!",
    "Some fish, like the Oscars, can recognize themselves in a mirror, indicating a level of self-awareness most humans lack!",
    "The Black Swallower can eat prey larger than itself by expanding its stomach, allowing it to consume prey up to ten times its mass!",
    "The Coelacanth, once thought to be extinct for 66 million years, was rediscovered off the coast of Animal Crossing in 1938.",
    "The Swordfish's bill is a powerful weapon used to slash and injure schools of fish before capturing them!",
    "The Wrasse fish sleeps in a mucus cocoon at night to mask its scent from nocturnal predators. Yummy!",
    "The Goby fish forms symbiotic partnerships with pistol shrimp, providing shelter in exchange for protection.",
    "The Salmon Shark is one of the few warm-blooded fish, allowing it to maintain a higher body temperature than the surrounding water!",
    "The Archerfish can recognize and differentiate between human faces, and it doesn't like ugly people!",
    "Fish have been shown to exhibit problem-solving skills, challenging the stereotype of fish as unintelligent creatures.",
    "The Whipnose Anglerfish uses a bioluminescent lure to attract prey in the dark depths of the ocean!",
    "The Napoleon Wrasse can undergo sex reversal, changing from female to male during its life!"
];



const upgrades = [
    { name: "Better Rods", cost: 20, fishsPerSecond: 1, description: "You upgrade your fishing rods to something slightly more modern. +1 fish per second." },
    { name: "Multi-Rod Holder", cost: 50, fishsPerSecond: 3, description: "You purchased a device that lets you use multiple fishing rods at once. +3 fish per second." },
    { name: "Lure Mastery", cost: 125, fishsPerSecond: 5, description: "You bought a special lure that attracts a variety of fish. +5 fish per second." },
    { name: "Retired Angler", cost: 315, fishsPerSecond: 10, description: "You promise to feed someone's family in exchange for their grandfather's time. +10 fish per second." },
    { name: "Aquaculture Farm", cost: 782, fishsPerSecond: 25, description: "You establish an aquaculture farm to cultivate and harvest fish. +25 fish per second." },
    { name: "Fish Processing Facility", cost: 1954, fishsPerSecond: 50, description: "You set up a fish processing facility to optimize fish utilization. +50 fish per second." },
    { name: "Toxin Filtration System", cost: 4883, fishsPerSecond: 200, description: "You install a toxin filtration system to ensure safe and delicious fish. +200 fish per second." },
    { name: "Neural Network Bouys", cost: 12208, fishsPerSecond: 500, description: "You deploy an advanced AI-powered bouy system which analyzes fish behavior in real-time and tracks their predicted movements. +500 fish per second." },
    { name: "Smuggle Illegal Bait", cost: 35118, fishsPerSecond: 1000, description: "You enlist some real unsavory folks to smuggle untested bait into the country. +1000 fish per second.", action: handleVoidNetPurchase },
    { name: "Biohazard Filtration System", cost: 76294, fishsPerSecond: 1500, description: "You install a cutting-edge filtration system to safely catch and process mutated, potentially hazardous fish. +1500 fish per second." },
    { name: "Upgrade Fishing Defense Vessels", cost: 190735, fishsPerSecond: 3000, description: "You equip your fishing vessel with hexagonal fibers to remain bouyant while better ensuring their safety. +3000 fish per second." },
    { name: "Underground Drilling", cost: 476837, fishsPerSecond: 7000, description: "You gain permits to search for underground lakes in residential areas. +7000 fish per second." },
    { name: "Pay Off Environmental Agencies", cost: 1192092, fishsPerSecond: 14750, description: "You agree to donate money and fish to local homeless shelters in exchange for less government oversight. +14750 fish per second." },
    { name: "Buy Game Development Studio", cost: 2980230, fishsPerSecond: 31309, description: "You purchase a game studio and force them to include fishing minigames into each new product. +31309 fish per second." },
    { name: "Reinforce Ocean Banks", cost: 7450575, fishsPerSecond: 0, description: "You agree to help set up blockades around coastal areas where things have become untenable. +0 fish per second." },
    { name: "Breed Fishcatcher Fish", cost: 18626437, fishsPerSecond: 42225, description: "Against your better judgement you begin breeding and releasing fish specifically designed to target agressive fish into the wild. +42225 fish per second." },
    { name: "Regroup Inland", cost: 46566094, fishsPerSecond: 0, description: "You retreat hundreds of miles into the country, trying to stay away from any large bodies of water. +0 fish per second." },
    { name: "Research Fish Virus", cost: 116415234, fishsPerSecond: 8000, description: "Begin sending small groups out to retrieve manageable quantities of fish for research without it being too dangerous. +8000 fish per second." },
    { name: "Smuggle Research Material", cost: 216415234, fishsPerSecond: 0, description: "You pass the material through your contacts to other scientists still alive, and hope your methods are correct. +0 fish per second." },
    { name: "Defend Against Them", cost: 727595214, fishsPerSecond: 10000, description: "You do your best to prevent the horde from gaining any new territory. +10000 fish per second." },
    { name: "Deploy Virus", cost: 2000000000, fishsPerSecond: 0, description: "You deploy the virus and the world's fish to human ratio suddenly goes back to normal. It will take a few years (long, smelly years) of rebuilding, but humanity has been saved from the fish onslaught. While you will forever be remembered as intergral in defending the world from the creatures of the sea, you are also publicly shunned and deported for your role in how it all began. You will, ironically, spend the rest of your days on a floating prison barge in the middle of the Atlantic Ocean... an ocean now completely devoid of life. Thanks to you.", action: unleashThem }
];


function unleashThem() {
    document.body.innerHTML = `<div id="upgradeDescription">${upgrades[upgrades.length - 1].description}</div>`;
    const restartPrompt = document.createElement("div");
    restartPrompt.innerText = "Do you want to restart the game?";
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart";
    restartButton.onclick = function() {
        location.reload(); // Reload the page to restart the game
    };
    restartPrompt.appendChild(restartButton);
    document.body.appendChild(restartPrompt);
}


function displayfishCount() {
    document.getElementById("fishCount").innerText = fishCount + " fish";
}

function displayfishsPerSecond() {
    document.getElementById("fishsPerSecond").innerText = fishsPerSecond + " fish per second";
}

function foragefish() {
    fishCount++;
    displayfishCount();
}

function purchaseUpgrade(upgrade) {
    if (fishCount >= upgrade.cost && upgrade.visible) {
        fishCount -= upgrade.cost;
        fishsPerSecond += upgrade.fishsPerSecond;
        displayfishCount();
        displayfishsPerSecond();
        displayUpgradeDescription(upgrade.description);

            if (!firstUpgradeBought) {
                firstUpgradeBought = true;
                changeFishIcon(); // Call the function to change the fishIcon image
            }

        // Check if the next upgrade is within the upgrades array and make it visible
        const indexOfUpgrade = upgrades.indexOf(upgrade);
        const nextUpgrade = upgrades[indexOfUpgrade + 1];
        if (nextUpgrade && !nextUpgrade.visible) {
            const upgradeButton = document.createElement("button");
            upgradeButton.className = "upgradeButton";
            upgradeButton.innerText = `${nextUpgrade.name} (Cost: ${nextUpgrade.cost} fish)`;
            upgradeButton.onclick = function() {
                purchaseUpgrade(nextUpgrade);
            };
            document.getElementById("upgradeButtons").appendChild(upgradeButton);
            nextUpgrade.visible = true;
            updateNextUpgrades(); // Update visibility of other upgrades after adding a new one
        }

        if (upgrade.name === "Deploy Virus") {
            unleashThem(); // Call unleashThem function when "Unleash Them" upgrade is purchased
        }
        if (upgrade.name === "Void Net" && !voidNetBought) {
            voidNetBought = true;
            handleVoidNetPurchase();
        }

    }
}


    function changeFishIcon() {
        // Change the fishIcon image
        document.getElementById("fishIcon").src = "fishIcon2.jpg";
    }


function displayUpgradeDescription(description) {
    document.getElementById("upgradeDescription").innerText = description;
}

function updateNextUpgrades() {
    const upgradeButtons = document.getElementsByClassName("upgradeButton");
    for (let i = 0; i < upgrades.length; i++) {
        const upgrade = upgrades[i];
        const button = upgradeButtons[i];
        if (fishCount >= upgrade.cost) {
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }
    }
}

function createUpgradeButton(upgrade, container) {
    if (fishCount >= upgrade.cost) {
        const upgradeButton = document.createElement("button");
        upgradeButton.className = "upgradeButton";
        upgradeButton.innerText = `${upgrade.name} (Cost: ${upgrade.cost} fish)`;
        upgradeButton.onclick = function() {
            if (fishCount >= upgrade.cost) {
                purchaseUpgrade(upgrade);
            }
        };
        container.appendChild(upgradeButton);
        upgrade.visible = true;
    } else {
        upgrade.visible = false;
    }
}


function updateNextUpgrades() {
    const upgradeButtonsContainer = document.getElementById("upgradeButtons");
    upgradeButtonsContainer.innerHTML = ""; // Clear existing buttons

    for (let i = 0; i < upgrades.length; i++) {
        const upgrade = upgrades[i];
        if (fishCount >= upgrade.cost) {
            createUpgradeButton(upgrade, upgradeButtonsContainer);
        }
    }
}

let voidNetPurchaseState = 0; // Variable to track the state of void net purchase

function handleVoidNetPurchase() {
    if (!voidNetBought) {
        switch (voidNetPurchaseState) {
            case 0:
                // Set the flag to prevent further purchases
                voidNetBought = true;

                // Pause the game
                clearInterval(fishsPerSecondInterval);

                // Clear the screen
                document.body.innerHTML = `<div id="voidNetMessage">Something stirs.</div><button id="continueButton">Click to continue.</button>`;
                const continueButton = document.getElementById("continueButton");
                continueButton.onclick = function () {
                    // Move to the next state
                    voidNetPurchaseState = 1;

                    // Restore the game state
                    document.body.innerHTML = originalHTML;
                    changeFishIcon(); // Call the function to change the fishIcon image
                    fishsPerSecondInterval = setInterval(updatefishsPerSecond, 1000); // Resume the game
                    initializeUpgradeButtons(); // Initialize upgrade buttons after restoring the state
                };
                break;

            case 1:
                // Display the message for the second state
                document.body.innerHTML = `<div id="voidNetMessage">You feel a strange connection to the cosmos.</div><button id="returnButton">Click to return to your fishing hole.</button>`;
                const returnButton = document.getElementById("returnButton");
                returnButton.onclick = function () {
                    // Move to the next state
                    voidNetPurchaseState = 2;

                    // Restore the game state
                    document.body.innerHTML = originalHTML;
                    changeFishIcon(); // Call the function to change the fishIcon image
                    fishsPerSecondInterval = setInterval(updatefishsPerSecond, 1000); // Resume the game
                    initializeUpgradeButtons(); // Initialize upgrade buttons after restoring the state
                };
                break;

            case 2:
                // Display the message for the third state
                document.body.innerHTML = `<div id="voidNetMessage">The cosmos acknowledges your presence.</div><button id="finalReturnButton">Click to return to your fishing hole.</button>`;
                const finalReturnButton = document.getElementById("finalReturnButton");
                finalReturnButton.onclick = function () {
                    // Move to the next state
                    voidNetPurchaseState = 3;

                    // Restore the game state
                    document.body.innerHTML = originalHTML;
                    changeFishIcon(); // Call the function to change the fishIcon image
                    fishsPerSecondInterval = setInterval(updatefishsPerSecond, 1000); // Resume the game
                    initializeUpgradeButtons(); // Initialize upgrade buttons after restoring the state
                };
                break;

            default:
                break;
        }
    }
}


function initializeUpgradeButtons() {
    const upgradeButtonsContainer = document.getElementById("upgradeButtons");
    let visibleUpgrades = 2; // Number of initial visible upgrades

    // Check if upgrade buttons already exist, if not, create and append them
    if (upgradeButtonsContainer.children.length === 0) {
        for (let i = 0; i < upgrades.length; i++) {
            const upgrade = upgrades[i];
            if (i < visibleUpgrades) {
                createUpgradeButton(upgrade, upgradeButtonsContainer);
            } else {
                upgrade.visible = false;
            }
        }
    }
}

setInterval(updateNextUpgrades, 1000); // Check upgrades visibility every second


function updatefishsPerSecond() {
    fishCount += fishsPerSecond; // Add fishs per second to the total count
    displayfishCount(); // Update the displayed fish count
}
setInterval(updatefishsPerSecond, 1000);

function displayRandomfishFact() {
    const randomFact = fishFacts[Math.floor(Math.random() * fishFacts.length)];
    document.getElementById("fishFacts").innerText = "Fun Fish Facts: " + randomFact;
}

setInterval(displayRandomfishFact, 8000);
updateNextUpgrades();
document.getElementById("forageButton").addEventListener("click", foragefish);

// Initialize upgrade buttons after DOM is fully loaded
initializeUpgradeButtons();

// Resume the game
fishsPerSecondInterval = setInterval(updatefishsPerSecond, 1000);
});