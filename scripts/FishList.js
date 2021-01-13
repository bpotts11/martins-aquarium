import { useFish } from './FishDataProvider.js'

export const FishList = () => {

    const contentElement = document.querySelector(".containerLeft")
    const fishes = useFish()

    contentElement.innerHTML += `
        <article class="fishList">
            All the fish go here!
        </article>
        `
}