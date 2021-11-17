const Token = require('../APIS/getToken')
const APIS = require('../APIS/XDM-Apis')

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
