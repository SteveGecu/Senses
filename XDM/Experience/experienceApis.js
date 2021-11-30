const fetch = require("node-fetch");
require('dotenv').config()

const XDMurl = process.env.XDMHOST

async function createExperience(token) {
    const response = await fetch(XDMurl + '/experience', {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'Authorization': `Bearer ${ token }`
        },
        body: {
            "_id": "614e46dca51b99240e000099",
            "assets": [],
            "containers": [
                {
                    "_id": "614e46dca51b99240e000001",
                    "friendlyName": "New Container",
                    "name": "New Container",
                    "layerIndex": 2,
                    "rotation": 0,
                    "width": null,
                    "height": null,
                    "backgroundAssetId": null,
                    "frames": []
                }
            ],
            "displays": [
                {
                    "_id": "61424a540b8cd59d0072c86b",
                    "friendlyName": "New Display",
                    "containers": [
                        "61424a540b8cd59d0072c86a"
                    ]
                }
            ],
            "frames": [],
            "frameLinks": [],
            "frameComponents": [],
            "touchpoints": [],
            "tag": [],
            "orgId": "60e4ad4b72fb7971b9c0fc2f"
        }
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }
}

async function getAllExperiences(token) {
    const response = await fetch(XDMurl + '/experience', {
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

async function getExperience(token, experienceId) {
    const response = await fetch(XDMurl + '/experience' + experienceId, {
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

async function updateExperience(token, experienceId) {
    const response = await fetch(XDMurl + '/experience' + experienceId, {
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

async function deleteExperience(token, experienceId) {
    const response = await fetch(XDMurl + '/experience' + experienceId, {
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
    createExperience,
    getAllExperiences,
    getExperience,
    updateExperience,
    deleteExperience
}

