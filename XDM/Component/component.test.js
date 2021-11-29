const Token = require('../getToken')
const ComponentApis = require('../Component/componentApis')

describe('XDM Tests', () => {
    let token;

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should Get Components', async () => {
        const response = await ComponentApis.getComponent(token)
        expect(response.status).toBe(200)
        console.log(response.body);
    });
})
