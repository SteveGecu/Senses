const fetch = require("node-fetch");
require('dotenv').config()

const XDMurl = process.env.XDMHOST

async function createOrganization(token, customerId, parentId) {
    const response = await fetch(XDMurl + '/customer/' + customerId + '/organization/' + parentId, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        },
        body: {}
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

async function getCustomersAllOrganizations(token, customerId) {
    const response = await fetch(XDMurl + '/customer/' + customerId + '/organization', {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        },
        body: {}
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

async function getCustomersOrganization(token, customerId, organizationId) {
    const response = await fetch(XDMurl + '/customer/' + customerId + '/organization' + organizationId, {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        },
        body: {}
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

async function updateOrganization(token, customerId, organizationId) {
    const response = await fetch(XDMurl + '/customer/' + customerId + '/organization/' + organizationId, {
        method: 'PUT',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        },
        body: {}

    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

module.exports = {
    createOrganization,
    getCustomersAllOrganizations,
    getCustomersOrganization,
    updateOrganization
}
