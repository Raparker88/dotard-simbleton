import { businessCollection } from "./BusinessProvider.js"

import { businessHTML } from "./Business.js"

const contentElement = document.querySelector(".active_businesses")

export const businessList = () => {
    const businesses = businessCollection()

    businesses.forEach(businessObj =>
        contentElement.innerHTML += businessHTML(businessObj)
    )
}