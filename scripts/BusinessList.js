import { businessCollection } from "./BusinessProvider.js"

import { businessHTML } from "./Business.js"

const contentElement = document.querySelector(".businessList")

export const businessList = () => {
    const businesses = businessCollection()
    
    contentElement.innerHTML += "<h2>Active Businesses</h2>"

    businesses.forEach(businessObj => {
            contentElement.innerHTML += businessHTML(businessObj)
    })
    
}
