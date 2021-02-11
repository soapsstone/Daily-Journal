/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <p><h3>Date:</h3>${entry.date}</p>
        <p><h3>Concepts Covered:</h3>${entry.concept}</p>
        <p><h3>Entry:</h3>${entry.entry}</p>
        <p><h3>Mood:</h3>${entry.mood}</p>
        </section>
    `
}
            /*Display the entry's full text, and the date
            it was entered inside section.*/