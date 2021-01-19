const fishCollection = [
    {
        image: "",
        name: "Marlin",
        species: "Amphiprionanae",
        location: "Great Barrier Reef",
        length: 4,
        diet: "seafood",
    },
    {
        image: "",
        name: "Nemo",
        species: "Amphiprionanae",
        location: "Great Barrier Reef",
        length: 2,
        diet: "seafood",
    },
    {
        image: "",
        name: "Dory",
        species: "Blue Tang",
        location: "Great Barrier Reef",
        length: 5,
        diet: "algae",
    },
    {
        image: "",
        name: "Gill",
        species: "Moorish Idol",
        location: "Pacific Ocean",
        length: 6,
        diet: "seafood",
    },
    {
        image: "",
        name: "Bubbles",
        species: "Yellow Tang",
        location: "Pacific Ocean",
        length: 3,
        diet: "herbivore",
    },
]

export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {
    const holyFish = []

    for (const fishObject of fishCollection) {
        if (fishObject.length % 3 === 0) {
            holyFish.push(fishObject)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    const soldiers = []

    for (const fishObject of fishCollection) {
        if (fishObject.length % 5 === 0) {
            soldiers.push(fishObject)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []

    for (const fishObject of fishCollection) {
        if (fishObject.length % 5 !== 0 && fishObject.length % 3 !== 0) {
            regularFish.push(fishObject)
        }
    }
    return regularFish
}