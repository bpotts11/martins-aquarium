let noteCollection = [
    {
        note: `Visit P Sherman 42 Wallaby Way Sydney`
    },
    {
        note: `Make friends along the way`
    },
    {
        note: `You are totally "Crush"ing it!`
    },
]

export const useNote = () => {
    return noteCollection.slice()
}