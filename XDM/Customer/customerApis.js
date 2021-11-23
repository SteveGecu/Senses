const fetch = require("node-fetch");
require('dotenv').config()

const XDMurl = process.env.XDMHOST

async function getCustomerGroups(token, customerId) {
    const response = await fetch(XDMurl + "/admin/customer/" + customerId + "/group", {
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
    const response = await fetch(XDMurl + "/customer/" + customerId, {
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

async function getCustomerApps(token) {
    const response = await fetch(XDMurl + "/customer/apps", {
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

async function createCustomer(token, someCustomerName) {
    const response = await fetch(XDMurl + "/customer", {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token }`
        },
        body: JSON.stringify({ 'name': someCustomerName })
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

async function updateCustomer(token, customerId, updatedName) {
    const response = await fetch(XDMurl + "/customer/" + customerId, {
        method: 'PUT',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token }`
        }, body: JSON.stringify({ 'name': updatedName })
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

async function deleteCustomer(customerId) {
    const response = await fetch(XDMurl + "/customer/" + customerId, {
        method: 'DELETE',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            //'Authorization': `Bearer ${ token }`
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
    getCustomer,
    getCustomerApps,
    createCustomer,
    deleteCustomer,
    updateCustomer
}