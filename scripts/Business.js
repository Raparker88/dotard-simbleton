export const businessHTML = (businessObj) => {
    return `
        <div class="business">
            <h3>${businessObj.companyName}</h3>
            <p>${businessObj.addressFullStreet}</p>
            <p>${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}</p>
        </div>
        `
}

