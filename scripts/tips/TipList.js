import { useQuote } from "./TipDataProvider.js"
import { Quote } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".containerLeft")
    const quotes = useQuote()

    contentElement.innerHTML += `
    <article class="containerLeft__quoteList contentArticle">
        <h2 id="tips">Tips</h2>
        ${quotes.map(quote => Quote(quote)).join("")}
    </article>
    `

    // Prevouse way of iterating. Commented out to get more practice with .map()
    // let quoteHTMLRepresentations = ""
    // for (const quote of quotes) {

    //     quoteHTMLRepresentations += Quote(quote)
    // }

    // contentElement.innerHTML += `
    //     <article class="containerLeft__quoteList contentArticle">
    //     <h2 id="tips">Tips</h2>
    //         ${quoteHTMLRepresentations}
    //     </article>
    //     `
}