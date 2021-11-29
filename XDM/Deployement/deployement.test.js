const Token = require('../../OKTA/getAccessTokenApi')
const DeployementApis = require('../Deployement/deployementApis')
let deploymentId

describe('Deployment Tests', () => {
    let token;

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should create new deployment', async () => {
        const response = await DeployementApis.createDeployment(token)
        deploymentId = response.body._id

        expect(response.status).toBe(201)
    });

    it('should get particular deployment', async () => {
        const rsponse = await DeployementApis.getDeployment(token, deploymentId)

        expect(response.status).toBe(200)
    });

    it('should get all deployments', async () => {
        const rsponse = await DeployementApis.getAllDeployment(token)

        expect(response.status).toBe(200)
    });

    it('should update particular deployment', async () => {
        const response = await DeployementApis.updateDeployment(token, deploymentId)

        expect(response.status).toBe(200)
    });

    it('should execute particular deployment', async () => {
        const response = await DeployementApis.executeDeployment(token, deploymentId)

        expect(response.status).toBe(200)
    });
})
