export const agentHTML = (agentObj) => {
    return `
        <div class="agents">
            <h3>${agentObj.fullName}</h3>
            <p>${agentObj.company}</p>
            <p>${agentObj.phoneNumber}
        </div>
        `
}