import { businessCollection } from "./BusinessProvider.js"

import { businessHTML } from "./Business.js"
import { newYorkBusinesses } from"./BusinessProvider.js"
import { manufacturers } from "./BusinessProvider.js"

const contentElement = document.querySelector(".businessList")



const addBusinessToDOM = (businessArray) => {

     businessArray.forEach(businessObj => {
        contentElement.innerHTML += businessHTML(businessObj)
        
    })
}



export const businessList = () => {
    const businesses = businessCollection()
    contentElement.innerHTML += "<h2>Active Businesses</h2>"
    addBusinessToDOM(businesses)

    const NYBusinesses = newYorkBusinesses()
    contentElement.innerHTML += "<h2>New York Businesses</h2>"
    addBusinessToDOM(NYBusinesses)

    const manufacturingBusinesses = manufacturers()
    contentElement.innerHTML += "<h2>Manufacturing Companies</h2>"
    addBusinessToDOM(manufacturingBusinesses)
}
