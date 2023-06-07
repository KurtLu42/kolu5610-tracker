//Add user input content to an object, and place the object in an array.//
const recordingList = [] || JSON.parse(localStorage.getItem("recordingList"));
const recording = {};

//Get the ul list in all recordings and set it to blank.//
let list = document.getElementById("list");
//list.innerHTML = "";

//Set a function to get the current time.//
recording.date = getDate();

function getDate() {
    var currentDate = new Date();
    var timeMinute = currentDate.getMinutes();
    var timeHour = currentDate.getHours();
    var day = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();

    var dateValue = timeHour + ":" + timeMinute + "  " + day + "/" + month + "/" + year;

    return dateValue;
}

//Read localStorage.
let recordingListLS = JSON.parse(localStorage.getItem("recordingList"));
//Show localStorage.
displayEachRecord();

//Add an event listener to the add button.//
var add = document.getElementById("button");
add.addEventListener("click", (event) => {
    //const recording = {};
    //Get the value of user input.//
    var sportsName = document.getElementById("sportsName").value.trim();
    var sportsPurpose = document.getElementById("sportPurpose").value.trim();
    var sportsLocation = document.getElementById("location").value.trim();
    var sportsEvaluation = document.getElementById("evaluation").value.trim();
    //Put the value of user input into an object.//
    recording.sportName = sportsName;
    recording.sportPurpose = sportsPurpose;
    recording.sportLocation = sportsLocation;
    recording.sportEvaluation = sportsEvaluation;
    //Put the object into an array.//
    recordingListLS = JSON.parse(localStorage.getItem("recordingList")) || [];
    recordingListLS.unshift(recording);


    //Update the array to localStorage.//
    localStorage.setItem("recordingList", JSON.stringify(recordingListLS));

    //Run the function//
    displayEachRecord();



})


function displayEachRecord() {
    //Display the recording list from localStorage on the webpage.//
    list.innerHTML = "";

    // Retrieve the recordingList stored in localStorage. //
    const recordingListLS = JSON.parse(localStorage.getItem("recordingList"));
    // If recordingListLS is null, initialize it as an empty array. //
    const recordingList = recordingListLS || [];

    recordingList.forEach((i) => {
        let listItem = document.createElement("li");
        //Collapsed state//
        let defaultState = `
            <div> 
            <p><strong>Sport Name: </strong>${i.sportName}</p >
            <p><strong>Date: </strong>${i.date}</p >
            <br> 
            <button class="detailButton">Details</button>
            </div>
        `;
        //Expended state//
        let expendedState = `
            <div> 
                <div class="allInformation">
                    <div class="firstTwo">
                        <p><strong>Sport Name: </strong>${i.sportName}</p >
                        <p><strong>Date: </strong>${i.date}</p >
                    </div>
                    <div class="lastTwo">
                        <p><strong>Location: </strong>${i.sportLocation}</p >
                        <p><strong>Evaluation: </strong>${i.sportEvaluation}</p >
                    </div>
                </div>
                <br> 
                
                <button class="backButton">Back</button>
            </div>
        `;

        let isExpanded = false;
        //Make the display page in a collapsed state//
        listItem.innerHTML = defaultState;
        //Add the content to the recording list//
        list.appendChild(listItem);
        //Allow users to click to view details and return to the default state.//
        listItem.addEventListener("click", (event) => {
            let target = event.target;
            if (target.classList.contains("detailButton")) {
                if (!isExpanded) {
                    listItem.innerHTML = expendedState;
                    isExpanded = true;
                }
            } else if (target.classList.contains("backButton")) {
                if (isExpanded) {
                    listItem.innerHTML = defaultState;
                    isExpanded = false;
                }
            }
        });
    })
}
//Set a clear button for all recorded items.//
let clearButton = document.getElementById("clearAllRecord");
clearButton.addEventListener("click", () => {
    localStorage.removeItem("recordingList");
    displayEachRecord();
})