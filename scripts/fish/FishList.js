import { mostHolyFish, nonHolyFish, soldierFish, useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

const buildFishListHTML = (arrayOfFish, heading) => {

    let fishHTMLRepresentation = `<h3>${heading}</h3>`
    for (const fishObj of arrayOfFish) {

        fishHTMLRepresentation += Fish(fishObj)
        // console.log(fishHTMLRepresentation)
    }
    return fishHTMLRepresentation
}

export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft")

    // Holy Fish
    const holyFishArray = mostHolyFish()

    const holyFishHTMLRepresentation = buildFishListHTML(holyFishArray, "Holy Fish")

    // Soldier Fish
    const soldierFishArray = soldierFish()

    const soldierFishHTMLRepresentation = buildFishListHTML(soldierFishArray, "Soldier Fish")

    // Regular Fish
    const regularFishArray = nonHolyFish()

    const regularFishHTMLRepresentation = buildFishListHTML(regularFishArray, "Regular Fish")


    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
        <h2 id="fish">Fish</h2>
        ${holyFishHTMLRepresentation} 
        ${soldierFishHTMLRepresentation}   
        ${regularFishHTMLRepresentation}
        </article>
        `
}