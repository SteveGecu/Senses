const Token = require('../../OKTA/getAccessTokenApi')
const APIS = require('../Customer/customerApis')
let customerId
const someCustomerName = 'GOGS'
const updatedCustomerName = 'yeniGOGS'

describe('XDM Tests', () => {
    let token;

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should create new customer', async () => {
        const response = await APIS.createCustomer(token, someCustomerName)
        customerId = response.body._id

        expect(response.status).toBe(201)
        expect(response.body.name).toBe(someCustomerName)
    });
    it('should Get Customer Groups', async () => {
        const response = await APIS.getCustomerGroups(token, customerId)

        expect(response.status).toBe(200)
    });

    it('should Get Customers', async () => {
        const response = await APIS.getCustomers(token)

        expect(response.status).toBe(200)
    });

    it('should get customer apps', async () => {
        const response = await APIS.getCustomerApps(token)

        expect(response.status).toBe(200)
    });

    it('should get customer with customer Id', async () => {
        const response = await APIS.getCustomer(token, customerId)

        expect(response.status).toBe(200)
        expect(response.body._id).toBe(customerId)
        expect(response.body.name).toBe(someCustomerName)
    });

    it('should update customer name', async () => {
        const response = await APIS.updateCustomer(token, customerId, updatedCustomerName)

        expect(response.status).toBe(200)
        expect(response.body.name).toBe(updatedCustomerName)
    });

    it('should delete customer', async () => {
        const response = await APIS.deleteCustomer(customerId)

        expect(response.status).toBe(200)
        expect(response.body.name).toBe(someCustomerName)
    });

})
