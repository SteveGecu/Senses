const Token = require('../getToken')
const APIS = require('../Component/componentApis')

describe('XDM Tests', () => {
    let token;

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should Get Components', async () => {
        const response = await APIS.getComponent(token)
        expect(response.status).toBe(200)
        console.log(response.body);
    });
})
