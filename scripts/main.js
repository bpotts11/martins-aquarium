import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()


import { useQuote } from './tips/TipDataProvider.js'
import { TipList } from './tips/TipList.js'

const allTheQuote = useQuote()

for (const quote of allTheQuote) {
    console.log(quote)
}

TipList()


import { useLocation } from './locations/LocationDataProvider.js'
import { LocationList } from './locations/LocationList.js'

const allTheLocation = useLocation()

for (const location of allTheLocation) {
    console.log(location)
}

LocationList()