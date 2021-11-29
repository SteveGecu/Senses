const fetch = require("node-fetch")
require('dotenv').config()
const codeVerifier = process.env.CODEVERIFIER
const username = process.env.USERNAME
const password = process.env.PASSWORD
const redirectUri = process.env.REDIRECTURI
const clientId = process.env.CLIENTID
const codeChallange = process.env.CODECHALLANGE
const sessionTokenUrl = 'https://spacee.okta.com/api/v1/authn'
const authTokenUrl = 'https://spacee.okta.com/oauth2/ausd9g9jmaQVYtJqt357/v1/authorize'
const accesTokenUrl = 'https://spacee.okta.com/oauth2/ausd9g9jmaQVYtJqt357/v1/token?state=state'
const clientId = '0oaatf0youl72WCfo357'
const cookie = 'DT=DI0cEqdjJOBS-uM8RryfOBntw; JSESSIONID=09BA4A0D45A8945ADB23FC3F5412C74B; proximity_f01431aa63886592385734608f15999c=cM/t6v+aMWfncC3yuKmVEXuw22/GwYZ+r53Oy6g+PXPjMQkvDwOAUJf7BASaX0pddP7fTTnsL1TwTj2wBh34YmzdjDvJFOSRlJP8drUmfqYcK9rdwAVcaVgrM3N1dHEUKjd5c43yRMjqLfI8xaGJ6nrcUIXBDLGBJoS2HNhATMj1Y96N5v/tU1rhqQ7CDLwx; sid=1022xWsQ6iLSn2YLOq7rGjmBw; t=default'
const cookieAuth = 'DT=DI0cEqdjJOBS-uM8RryfOBntw; JSESSIONID=5D9267F625237453E16A40AE9F8A1C20; proximity_f01431aa63886592385734608f15999c=cM/t6v+aMWfncC3yuKmVEXuw22/GwYZ+r53Oy6g+PXPjMQkvDwOAUJf7BASaX0pddP7fTTnsL1TwTj2wBh34YmzdjDvJFOSRlJP8drUmfqYcK9rdwAVcaVgrM3N1dHEUKjd5c43yRMjqLfI8xaGJ6nrcUIXBDLGBJoS2HNhATMj1Y96N5v/tU1rhqQ7CDLwx; sid=102jvSaR576QdmoW86fc8EzyQ; t=default'
const accessCookie = 'DT=DI0cEqdjJOBS-uM8RryfOBntw; JSESSIONID=5D9267F625237453E16A40AE9F8A1C20; proximity_f01431aa63886592385734608f15999c=cM/t6v+aMWfncC3yuKmVEXuw22/GwYZ+r53Oy6g+PXPjMQkvDwOAUJf7BASaX0pddP7fTTnsL1TwTj2wBh34YmzdjDvJFOSRlJP8drUmfqYcK9rdwAVcaVgrM3N1dHEUKjd5c43yRMjqLfI8xaGJ6nrcUIXBDLGBJoS2HNhATMj1Y96N5v/tU1rhqQ7CDLwx; sid=102jvSaR576QdmoW86fc8EzyQ; t=default'
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "DT=DI0cEqdjJOBS-uM8RryfOBntw; JSESSIONID=E0B64730F19AFFC62BA56D0EA6676CED; proximity_f01431aa63886592385734608f15999c=cM/t6v+aMWfncC3yuKmVEXuw22/GwYZ+r53Oy6g+PXPjMQkvDwOAUJf7BASaX0pddP7fTTnsL1TwTj2wBh34YmzdjDvJFOSRlJP8drUmfqYcK9rdwAVcaVgrM3N1dHEUKjd5c43yRMjqLfI8xaGJ6nrcUIXBDLGBJoS2HNhATMj1Y96N5v/tU1rhqQ7CDLwx; t=default");


async function getToken() {
    const sessionTokenResponse = await fetch(sessionTokenUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cookie': cookie
        },
        body: JSON.stringify({
            'username': username,
            'password': password,
            'options': {
                'multiOptionalFactorEnroll': false,
                'warnBeforePasswordExpired': false
            }
        })
    }
    ).then(response => response.json())
    const sessionToken = await sessionTokenResponse.sessionToken

    const authorizationCode = await fetch(authTokenUrl + "?client_id=" + clientId + "&code_challenge=" + codeChallange + "&code_challenge_method=S256&redirect_uri=" + redirectUri + "&response_type=code&sessionToken=" + sessionToken + "&state=state&nonce=nonce&scope=openid profile email", {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
            'Cookie': cookieAuth,
        },
        redirect: 'unfollow'
    })
    const responseUrl = await authorizationCode.headers.get('location')
    const code = responseUrl ? responseUrl.match(/code=([^&]*)/)[1] : null;

    let urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("redirect_uri", redirectUri);
    urlencoded.append("code", code);
    urlencoded.append("code_verifier", codeVerifier);
    urlencoded.append("client_id", clientId);

    const accessTokenResponse = await fetch(accesTokenUrl, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': accessCookie
        },
        body: urlencoded
    }).then(response => response.json())

    return await accessTokenResponse.access_token
}

module.exports = {
    getToken
}