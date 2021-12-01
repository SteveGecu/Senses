const Token = require('../getToken')
const ComponentApis = require('./componentApis')

describe('XDM Component Tests', () => {
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
