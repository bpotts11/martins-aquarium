export const Fish = (fish) => {
    return `
        <section class="fishCard" >
                <img class="fishCard__image image--card" src="${fish.image}">
                <p class="fishCard__info fishCard--name">${fish.name}</p>
                <p class="fishCard__info">${fish.species}</p>
                <p class="fishCard__info">${fish.length} inches</p>
                <p class="fishCard__info">${fish.location}</p>
                <p class="fishCard__info">${fish.diet}</p>
        </section>
    `
}
