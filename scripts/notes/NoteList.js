import { useNote } from "./NoteDataProvider.js"
import { Note } from "./Note.js"

export const NoteList = () => {
    const contentElement = document.querySelector(".containerRight")
    const notes = useNote()

    contentElement.innerHTML += `
    <article>
        <h2 id="note">Notes</h2>
        <ul>
        ${notes.map(note => Note(note)).join("")}
        </ul>
    </article>
    `
}