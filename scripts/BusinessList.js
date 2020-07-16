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

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
            const businesses = businessCollection()
            const foundBusiness = businesses.find(business => business.companyName.includes(keyPressEvent.target.value))// implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });
