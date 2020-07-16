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