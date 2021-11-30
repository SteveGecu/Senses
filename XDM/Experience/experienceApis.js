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
        body: {}
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

