const fetch = require("node-fetch");
require('dotenv').config()

const XDMurl = process.env.XDMHOST

async function getAllDevice(token) {
    const response = await fetch(XDMurl + "/admin/customer/device", {
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

async function getDevice(token, deviceId) {
    const response = await fetch(XDMurl + "/admin/customer/device" + deviceId, {
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
    getAllDevice,
    getDevice
}