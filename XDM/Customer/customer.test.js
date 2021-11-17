const Token = require('../getToken')
const APIS = require('../Customer/customerApis')

describe('XDM Tests', () => {
    let token;

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should Get Customer Groups', async () => {
        const response = await APIS.getCustomerGroups(token)
        expect(response.status).toBe(200)
        console.log(response.body);
    });

    it('should Get Customers', async () => {
        const response = await APIS.getCustomers(token)
        expect(response.status).toBe(200)
        console.log(response.body);
    });
})
