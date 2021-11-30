const Token = require('../../OKTA/getAccessTokenApi')
const organizationApis = require('./organizationApis')
let customerId
let parentId
let organizationId


describe('Organization Tests', () => {
    let token

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should create new organization', async () => {
        const response = await organizationApis.createOrganization(token, customerId, parentId)
        organizationId = response.body._id

        expect(response.status).toBe(201)
    });

    it('should get customers all organization ', async () => {
        const response = await organizationApis.getCustomersAllOrganizations(token, customerId)

        expect(response.status).toBe(200)
    });

    it('should get customers particular organization', async () => {
        const response = await organizationApis.getCustomersOrganization(token, customerId, organizationId)

        expect(response.status).toBe(200)
    });

    it('should update customers particular organization', async () => {
        const response = await organizationApis.updateOrganization(token, customerId, organizationId)

        expect(response.status).toBe(200)
    });
})