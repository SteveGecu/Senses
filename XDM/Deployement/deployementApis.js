const fetch = require("node-fetch");
require('dotenv').config()

const XDMurl = process.env.XDMHOST

async function getAllDeployment(token) {
    const response = await fetch(XDMurl + "/deployement", {
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

async function createDeployment(token) {
    const response = await fetch(XDMurl + "/deployement", {
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

async function getDeployment(token, deploymentId) {
    const response = await fetch(XDMurl + "/deployment" + deploymentId, {
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

async function updateDeployment(token, deploymentId) {
    const response = await fetch(XDMurl + "/deployment" + deploymentId, {
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

async function executeDeployment(token, deploymentId) {
    const response = await fetch(XDMurl + "/deployement" + deploymentId + "/execute", {
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

module.exports = {
    getAllDeployment,
    createDeployment,
    getDeployment,
    updateDeployment,
    executeDeployment
}

