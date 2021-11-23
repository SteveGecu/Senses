const tokenApi = require('./getAccessTokenApi')



describe('test', () => {
    it('shoud get session token ', async () => {
        const token = await tokenApi.getToken()
        console.log(token);

    });
})