import { agentHTML } from "./Agent.js"
import { agentCollection } from "./BusinessProvider.js"

const contentElement = document.querySelector(".agents")

export const agentList = () => {
    const agents = agentCollection()
    contentElement.innerHTML += "<h2>Agents</h2>"

    agents.forEach(agent => {
        contentElement.innerHTML += agentHTML(agent)
    })
}
const companySearchResultArticle = document.querySelector(".foundAgents")

document
    .querySelector("#agentSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
            const agents = agentCollection()
            const foundAgents = agents.find(agent => agent.fullName.includes(keyPressEvent.target.value))// implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundAgents.fullName}
                </h2>
                <section>
                ${foundAgents.company}

                </section>
                <section>
                ${foundAgents.phoneNumber}
                </section>
            `;
        }
    });