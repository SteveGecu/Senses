const Token = require('../../OKTA/getAccessTokenApi')
const deviceApis = require('./deviceApis')
let deviceId

describe('device Tests', () => {
    let token

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should get all devices', async () => {
        const response = await deviceApis.getAllDevice(token) //BUG
        deviceId = response.body._id

        expect(response.status).toBe(200)
        expect((response.body)).toHaveProperty
    });

    it('should get particular device', async () => {
        const response = await deviceApis.getDevice(token, deviceId)

        expect(response.status).toBe(200)
        expect(expect.body).toHaveProperty
    });
})