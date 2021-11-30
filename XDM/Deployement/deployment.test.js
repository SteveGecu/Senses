const Token = require('../../OKTA/getAccessTokenApi')
const DeploymentApis = require('./deploymentApis')
const CustomerApis = require('../Customer/customerApis')
let deploymentId
let experienceId
let customerId
let name = 'newDepName'
let isexecuted = false

describe('Deployment Tests', () => {
    let token;

    beforeAll(async () => {
        token = await Token.getToken()
        const response = await CustomerApis.createCustomer(token, someCustomerName)
        customerId = response.body._id
    })

    it('should create new deployment', async () => {
        const response = await DeploymentApis.createDeployment(token, experienceId, customerId)
        deploymentId = response.body._id

        expect(response.status).toBe(201)
    });

    it('should get particular deployment', async () => {
        const response = await DeploymentApis.getDeployment(token, deploymentId)

        expect(response.status).toBe(200)
    });

    it('should get all deployments', async () => {
        const response = await DeploymentApis.getAllDeployment(token)

        expect(response.status).toBe(200)
    });

    it('should update particular deployment', async () => {
        const response = await DeploymentApis.updateDeployment(token, deploymentId, customerId, experienceId, name, isexecuted)

        expect(response.status).toBe(200)
    });

    it('should execute particular deployment', async () => {
        const response = await DeploymentApis.executeDeployment(token, deploymentId) //BUG

        expect(response.status).toBe(200)
    });
})
