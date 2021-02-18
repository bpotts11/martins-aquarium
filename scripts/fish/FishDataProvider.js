let fishCollection = [
    {
        image: "https://nemobhjj.weebly.com/uploads/2/2/4/1/22414564/4502720.jpeg?428",
        name: "Marlin",
        species: "Amphiprionanae",
        location: "Great Barrier Reef",
        length: 4,
        diet: "seafood",
    },
    {
        image: "https://londonhollywood.files.wordpress.com/2014/11/1590.jpg",
        name: "Nemo",
        species: "Amphiprionanae",
        location: "Great Barrier Reef",
        length: 2,
        diet: "seafood",
    },
    {
        image: "https://www.canyon-news.com/wp-content/uploads/2016/07/Dory.jpg",
        name: "Dory",
        species: "Blue Tang",
        location: "Great Barrier Reef",
        length: 5,
        diet: "algae",
    },
    {
        image: "https://i.pinimg.com/originals/9d/25/60/9d256093f0f62f04a52554ba4e74653d.jpg",
        name: "Gill",
        species: "Moorish Idol",
        location: "Pacific Ocean",
        length: 6,
        diet: "seafood",
    },
    {
        image: "https://i.pinimg.com/originals/b6/79/4f/b6794fe496700acf88b366b408af5779.jpg",
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