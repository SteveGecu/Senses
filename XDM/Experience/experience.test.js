const Token = require('../../OKTA/getAccessTokenApi')
const experienceApis = require('./experienceApis')
let experienceId

describe('Experience Tests', () => {
    let token

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should create a new experience', async () => {
        const response = await experienceApis.createExperience(token)
        experienceId = response.body._id

        expect(response.status).toBe(201)
    });

    it('should get all experiences', async () => {
        const response = await experienceApis.getAllExperiences(token)

        expect(response.status).toBe(200)
    });

    it('should get particular experience', async () => {
        const response = await experienceApis.getExperience(token, experienceId)

        expect(response.status).toBe(200)
    });

    it('should update particular experience', async () => {
        const response = await experienceApis.updateExperience(token, experienceId)

        expect(response.status).toBe(200)
    });

    it('should delete particular experience', async () => {
        const response = await experienceApis.deleteExperience(token, experienceId)

        expect(response.status).toBe(200)
    });
})