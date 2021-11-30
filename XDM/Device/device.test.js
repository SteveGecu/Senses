const Token = require('../../OKTA/getAccessTokenApi')
const Apis = require('./deviceApis')
let deviceId

describe('device Tests', () => {
    let token

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should get all devices', async () => {
        const response = await Apis.getAllDevice(token) //BUG
        deviceId = response.body._id
        console.log(response);

        expect(response.status).toBe(200)
        expect((response.body)).toHaveProperty
    });

    it('should get particular device', async () => {
        const response = await Apis.getDevice(token, deviceId)
        console.log(response);

        expect(response.status).toBe(200)
        expect(expect.body).toHaveProperty
    });
})