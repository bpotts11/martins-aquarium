const quoteCollection = [
    {
        text: "Fish aren't made to be in a box, kid...",
        author: "Gil",
        location: "Sydney, Australia",
        date: "May 30, 3003",
    },
    {
        text: "Just Keep Swimming",
        author: "Dory",
        location: "Pacific Ocean",
        date: "May 30, 2003",
    },
    {
        text: "Fish are friends, Not food.",
        author: "Bruce",
        location: "Pacific Ocean",
        date: "May 30, 2003",
    },
]

export const useQuote = () => {
    return quoteCollection.slice()
}
