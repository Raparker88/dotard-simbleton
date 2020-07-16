import { businessCollection } from "./BusinessProvider.js"

import { businessHTML } from "./Business.js"

const contentElement = document.querySelector(".businessList--newYork")

export const newYorkList = () => {
    const businesses = businessCollection()
    
    contentElement.innerHTML += "<h2>New York Businesses</h2>"

    businesses.filter(businessObj => {
        if (businessObj.addressStateCode === "NY"){   
            contentElement.innerHTML += businessHTML(businessObj)
        }
    })
    
}