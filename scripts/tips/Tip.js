export const Quote = (quote) => {
    return `
        <section class="quoteCard">
                <p class="quoteCard__info">${quote.text}</p>
                <p class="quoteCard__info">${quote.author}</p>
                <p class="quoteCard__info">${quote.location}</p>
                <p class="quoteCard__info">${quote.date}</p>
        </section>
    `
}
