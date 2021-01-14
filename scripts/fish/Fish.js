export const Fish = (fish) => {
    return `
        <div class="fishCard">
                <img class="fish__image image--card" src="${fish.image}">
                <p class="fish__name">${fish.name}</p>
                <p class="fish__species">${fish.species}</p>
                <p class="fish__length">${fish.length}</p>
                <p class="fish__location">${fish.location}</p>
                <p class="fish__diet">${fish.diet}</p>
        </div>
    `
}