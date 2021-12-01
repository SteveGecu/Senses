const Token = require('../getToken')
const UserApis = require('./userApis')
let userId

describe('XDM User Tests', () => {
    let token;

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should create user', async () => {
        const response = await UserApis.createUser(token)
        userId = response.body._id

        expect(response.status).toBe(201)
    });

    it('should get users', async () => {
        const response = await UserApis.getUsers(token)

        expect(response.status).toBe(200)
    });

    it('should get particular user', async () => {
        const response = await UserApis.getUser(token, userId)

        expect(response.status).toBe(200)
    });
})
