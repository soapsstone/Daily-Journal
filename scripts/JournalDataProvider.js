/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
// const journal = [
//     {
//         id: 1,
//         date: "07/24/2025",
//         concept: "HTML & CSS",
//         entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//         mood: "Ok"
//     },
//     {
//         id: 2,
//         date: "07/26/2025",
//         concept: "Complex Flexbox",
//         entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
//         mood: "Sad"
//     },
//     {
//         id: 3,
//         date: "07/27/2025",
//         concept: "Teminal Basics",
//         entry: "We learned more about our terminal and more commands invloving Github.",
//         mood: "Tired"
//     }
// ]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

let journal = []

export const getEntries = () => {
    return fetch("http://localhost:5501/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedJournal => {
            journal = parsedJournal
            // What should happen when we finally have the array?
        })
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const saveJournalEntry = newJournalEntry => {
    // Use `fetch` with the POST method to add your entry to your API
return fetch("http://localhost:5501/entries", {
    method: "POST",  // makes a post request
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry) // the thing its going to send is a jsonified note we just built
})
}
//purely for data access and only that - muddy the water of the principal responsibility