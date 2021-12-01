const fetch = require("node-fetch");
require('dotenv').config()

const XDMurl = process.env.XDMHOST

async function createAsset(token) {
    const response = await fetch(XDMurl + "/asset", {
        method: 'post',
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

async function getAsset(token) {
    const response = await fetch(XDMurl + "/asset", {
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

async function deleteAsset(token, assetId) {
    const response = await fetch(XDMurl + "/asset" + assetId, {
        method: 'DELETE',
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
    createAsset,
    getAsset,
    deleteAsset

}