import { mostHolyFish, nonHolyFish, soldierFish, useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft")

    const fishArray = useFish()


    const holyFishArray = mostHolyFish()
    const soldierFishArray = soldierFish()
    const regularFishArray = nonHolyFish()

    let holyFishHTMLRepresentation = "<h3>Holy Fish</h3>"
    for (const fishObj of holyFishArray) {
        holyFishHTMLRepresentation += Fish(fishObj)
    }

    let soldierFishHTMLRepresentation = "<h3>Soldier Fish</h3>"
    for (const fishObj of soldierFishArray) {
        soldierFishHTMLRepresentation += Fish(fishObj)
    }

    let regularFishHTMLRepresentations = "<h3>Regular Fish</h3>"
    for (const fishObj of regularFishArray) {
        regularFishHTMLRepresentations += Fish(fishObj)
    }

    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
        ${holyFishHTMLRepresentation} 
        ${soldierFishHTMLRepresentation}   
        ${regularFishHTMLRepresentations}
        </article>
        `
}