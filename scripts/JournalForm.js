// In your JournalForm component module listen for the click on the Record Journal Entry button at the bottom of your form. check
// Use document.querySelector to select your input fields. check
// Use the .value property on the input field elements to get the text that you typed/chose. check
// Build a new object representation of a journal entry. Make sure the keys are consistent with the existing objects in your API. check
// Invoke the save function that you created in your provider component above. check
// Then call the function that reprents the list of journal entries check

import { saveJournalEntry } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"

const contentTarget = document.querySelector(".entryLog")

const eventHub = document.querySelector(".entryLog")

export const EntryForm = () => {
    contentTarget.innerHTML = `
        <fieldset class="mainBits">
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
            </fieldset>
        <fieldset>
            <label for="concepts">Concepts covered</label>
            <input type="text" name="conceptsCovered" id="conceptsCovered">
            </fieldset>
        <fieldset class="mainBits">
            <label for="journalEntry">Journal Entry</label>
            <textarea name="journalEntry" id="journalEntry" rows="2" cols="25"> </textarea>
            </fieldset>
        <fieldset class="mood">
            <label for="mood">Mood of the day</label>
            <select name="dayMood" id="dayMood">
                <option value="sad">Sad</option>
                <option value="happy">Happy</option>
                <option value="angry">Angry</option>
                <option value="hangry">Hangry</option>
                <option value="moody">Moody</option>
            </select>
        </fieldset>
        <button id="saveEntry">Record Journal Entry</button>
        <hr>
        <h2>Entry Log</h2>
    `
} // buidling the form - need an input or property of the note


// all the following is happening when we click the save button

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
    //console.log("you clicked me")

    // Make a new object representation of a note
        const newEntry = {
            //getting the value or inputs and storing in an object
            date: document.querySelector("#journalDate").value,
            concept: document.querySelector("#conceptsCovered").value,
            entry: document.querySelector("#journalEntry").value,
            mood: document.querySelector("#dayMood").value,
        }// Key/value pairs here
       
        console.log(newEntry)
        console.log(Object.values(newEntry))
        
        // Change API state and application state
        saveJournalEntry(newEntry) //saving the note
        .then(EntryListComponent) // Refresh your whole list of notes once you've saved your new one 
    }
    //console.log(clickEvent.target.id)
})