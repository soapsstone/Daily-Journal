/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export function EntryListComponent() {
    getEntries()
    .then(() => {
    // DOM reference to where all entries will be rendered
    const entryLog = document.querySelector(".entryLog")
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries){
        entryLog.innerHTML += JournalEntryComponent(entry);
    };
})
}