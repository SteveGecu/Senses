const XDMurl = 'https://xdm-api.sense.dev.eastus2.spacee.io'
const fetch = require("node-fetch");

async function getCustomerGroups(token, customerId) {
    const response = await fetch(XDMurl + "/customer/" + customerId + "/groups", {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        }
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

async function getCustomers(token) {
    const response = await fetch(XDMurl + "/customer", {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        }
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

async function getCustomer(token, customerId) {
    const response = await fetch(XDMurl + "/customer" + customerId, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        }
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

module.exports = {
    getCustomerGroups,
    getCustomers,
    getCustomer
}