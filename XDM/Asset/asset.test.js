const Token = require('../getToken')
const AssetApis = require('./assetApis')
let assetId

describe('XDM Asset Tests', () => {
    let token;

    beforeAll(async () => {
        token = await Token.getToken()
    })

    it('should create asset', async () => {
        const response = await AssetApis.createAsset(token)
        assetId = response.body._id

        expect(response.status).toBe(201)
    });

    it('should get assets', async () => {
        const response = await AssetApis.getAsset(token)

        expect(response.status).toBe(200)
    });

    it('should delete asset', async () => {
        const response = await AssetApis.deleteAsset(token, assetId)

        expect(response.status).toBe(200)
    });
})
