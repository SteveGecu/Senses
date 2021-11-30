const fetch = require("node-fetch");
require('dotenv').config()

const XDMurl = process.env.XDMHOST

async function getAllDeployment(token) {
    const response = await fetch(XDMurl + "/deployment", {
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

async function createDeployment(token, experienceId, customerId,) {
    const response = await fetch(XDMurl + "/deployment", {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        },
        body: {
            "name": "TestAutomation",
            "description": "This is a Test Automation Deployment",
            "devices": "spacee-sense-12",
            "experienceId": experienceId,
            "customerId": customerId
        }
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

async function updateDeployment(token, deploymentId, customerId, experienceId, name, isexecuted) {
    const response = await fetch(XDMurl + "/deployment" + deploymentId, {
        method: 'PUT',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        },
        body: {
            "createdAt": "2021-11-12T20:54:38.291Z",
            "customerId": customerId,
            "description": "Ignore",
            "devices": "spacee-sense-12",
            "experienceId": experienceId,
            "isExecuted": isexecuted,
            "name": name,
            "updatedAt": "2021-11-15T07:46:11.982Z",
            "__v": 0,
            "_id": "618ed48e6a12d8515acb0eee"
        }
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

async function executeDeployment(token, deploymentId) {
    const response = await fetch(XDMurl + "/" + deploymentId + "/execute", {
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

