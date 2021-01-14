import { useQuote } from "./TipDataProvider.js"
import { Quote } from "./Tip.js"

export const TipList = () => {

    const contentElement = document.querySelector(".containerLeft")
    const quotes = useQuote()

    let quoteHTMLRepresentations = ""
    for (const quote of quotes) {

        quoteHTMLRepresentations += Quote(quote)
        console.log(quoteHTMLRepresentations)
    }

    contentElement.innerHTML += `
        <article class="containerLeft__quoteList contentArticle">
            ${quoteHTMLRepresentations}
        </article>
        `
}