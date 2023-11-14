


// hämta title, beskrivning och old sen spara de i textarea
function addProgram() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('Beskrivning').value;
    const oldallow = document.getElementById('old').value;

    var eventDetails = "Titel: " + title + "\nBeskrivning: " + description + "\nÅlder: " + oldallow + "\n\n";

    var Textarea = document.getElementById('events');
    Textarea.value += eventDetails;

    // Rensa efter vi har läggt title,beskrivning och old
    document.getElementById('title').value = '';
    document.getElementById('Beskrivning').value = '';
    document.getElementById('old').value = '';

    if (title && description && oldallow) {
        const program = { title, description, oldallow };
        
        // Lägg till program i local storage
        saveProgram(program);

        // Uppdatera listan med program
        displayPrograms();

        // Återställ formuläret
       document.getElementById('programForm').reset();
    }
   
}
// spara program i lokalstorage
function saveProgram(program) {
    let programs = JSON.parse(localStorage.getItem('programs')) || [];
    programs.push(program);
    localStorage.setItem('programs', JSON.stringify(programs));
}

// ladda upp program i lokalstorage
function loadPrograms() {
    let programs = JSON.parse(localStorage.getItem('programs')) || [];
    displayPrograms(programs);
}

function displayPrograms(programs) {
    const programList = document.getElementById('programList');
    programList.innerHTML = '';

    programs.forEach(program => {
        const li = document.createElement('li');
        li.textContent = `${program.title} - ${program.description} (Ålder: ${program.oldallow})`;
        programList.appendChild(li);
    });
}
function showProgramInfo(program) {

    // Hämta textarea-elementet
    const programInfo = document.getElementById('programInfo');

    // Visa programinformation i textarea
    programInfo.value = `Titel: ${program.title}\nBeskrivning: ${program.description}\nÅldersgräns: ${program.ageLimit}`;
}
// sök efter program
function searchPrograms() {
    const sökInput = document.getElementById('searchInput').value.toLowerCase();
    let programs = JSON.parse(localStorage.getItem('programs')) || [];

    if (sökInput) {
        programs = programs.filter(program =>
            program.title.toLowerCase().includes(sökInput) ||
            program.description.toLowerCase().includes(sökInput)
        );
    }

    displayPrograms(programs);
}

//  spara annan data i local storage om det behövs
function saveData() {    
   
    console.log("Data sparad!");
}

// visa annan data från local storage om det behövs
function displayData() {
  
    const sparaData = localStorage.getItem('programs');
 alert(sparaData ? `Sparad data:\n${sparaData}` : 'Ingen sparad data.');
  
}

 // Rensa all data i local storage
function clearStorage() {
   
    localStorage.clear();

 // Uppdatera listan för att visa att all data har raderats
    displayPrograms([]);
    console.log("Local storage rensad!");
}

var today = new Date();

// Skapa en array med månadsnamn
var monthNames = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

// Hämta dagens dag, månad och år
var day = today.getDate();
var month = monthNames[today.getMonth()];
var year = today.getFullYear();

// Sätt in datumet i HTML-elementet med id "currentDate"
document.getElementById("currentDate").innerHTML = day + " " + month + " " + year;


