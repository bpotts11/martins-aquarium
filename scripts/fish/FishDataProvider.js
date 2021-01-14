const fishCollection = [
    {
        image: "",
        name: "Marlin",
        species: "Amphiprionanae",
        location: "Great Barrier Reef",
        length: "4 inches",
        diet: "seafood",
    },
    {
        image: "",
        name: "Nemo",
        species: "Amphiprionanae",
        location: "Great Barrier Reef",
        length: "2 inches",
        diet: "seafood",
    },
    {
        image: "",
        name: "Dory",
        species: "Blue Tang",
        location: "Great Barrier Reef",
        length: "4 inches",
        diet: "algae",
    },
    {
        image: "",
        name: "Gill",
        species: "Moorish Idol",
        location: "Pacific Ocean",
        length: "6 inches",
        diet: "seafood",
    },
    {
        image: "",
        name: "Bubbles",
        species: "Yellow Tang",
        location: "Pacific Ocean",
        length: "5 inches",
        diet: "herbivore",
    },
]

export const useFish = () => {
    return fishCollection.slice()
}