export const Fish = (fish) => {
    return `
        <section class="fishCard" >
                <img class="fishCard__image image--card" src="${fish.image}">
                <p class="fishCard__name">${fish.name}</p>
                <p class="fishCard__species">${fish.species}</p>
                <p class="fishCard__length">${fish.length}</p>
                <p class="fishCard__location">${fish.location}</p>
                <p class="fishCard__diet">${fish.diet}</p>
        </section>
    `
}
