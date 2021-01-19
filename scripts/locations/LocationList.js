import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

    const contentElement = document.querySelector(".containerLeft")
    const locations = useLocation()

    let locationHTMLRepresentations = ""
    for (const location of locations) {

        locationHTMLRepresentations += Location(location)
    }

    contentElement.innerHTML += `
        <article class="containerLeft__locationList contentArticle">
            ${locationHTMLRepresentations}
        </article>
        `
}