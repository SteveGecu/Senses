const XDMurl = process.env.XDMHOST
import fetch from "node-fetch";

async function getComponent(token) {
    const response = await fetch(XDMurl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ token }`
        },
        body: JSON.stringify({})
    })
    return {
        body: await response.json(),
        status: response.status,
        headers: response.statusText
    }

}