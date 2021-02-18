import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

    const contentElement = document.querySelector(".containerLeft")
    const locations = useLocation()

    contentElement.innerHTML += `
        <article class="containerLeft__locationList contentArticle">
            <h2 id="location">Locations</h2>
            ${locations.map(location => Location(location)).join("")}
        </article>
        `

    // How I iterated through the locations before refactoring with .map() to get more practice

    // let locationHTMLRepresentations = ""
    // for (const location of locations) {
    //     locationHTMLRepresentations += Location(location)
    // }
    // contentElement.innerHTML += `
    //     <article class="containerLeft__locationList contentArticle">
    //     <h2 id="location">Locations</h2>
    //         ${locationHTMLRepresentations}
    //     </article>
    //     `
}