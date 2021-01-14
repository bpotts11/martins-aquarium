export const Location = (location) => {
    return `
        <section class="locationCard">
                <img class="locationCard__image image--card" src="${location.image}">
                <p class="locationCard__city">${location.city}</p>
                <p class="locationCard__country">${location.country}</p>
                <p class="locationCard__waterBody">${location.waterbody}</div>
        </section>
    `
}
