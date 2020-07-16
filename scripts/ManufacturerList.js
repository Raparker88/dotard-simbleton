import { businessCollection } from "./BusinessProvider.js"

import { businessHTML } from "./Business.js"

const contentElement = document.querySelector(".businessList--manufacturing")

export const manufacturerList = () => {
    const businesses = businessCollection()
    
    contentElement.innerHTML += "<h2>Manufacturing Companies</h2>"

    businesses.filter(businessObj => {
        if (businessObj.companyIndustry === "Manufacturing"){   
            contentElement.innerHTML += businessHTML(businessObj)
        }
    })
    
}