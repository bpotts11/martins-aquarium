export const Location = (location) => {
    return `
        <section class="locationCard">
                <img class="locationCard__image image--card" src="${location.image}">
                <p class="locationCard__info">${location.city}</p>
                <p class="locationCard__info">${location.country}</p>
                <p class="locationCard__info">${location.waterbody}</div>
        </section>
    `
}
