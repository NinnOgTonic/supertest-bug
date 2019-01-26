"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const app_1 = require("./app");
describe('Supertest failing to invoke middleware', () => {
    let expressApp;
    beforeEach(() => {
        expressApp = app_1.generateExpressApp();
    });
    afterEach(() => {
        expressApp = undefined;
    });
    describe('/', () => {
        it('Request does not fail properly', async () => {
            const res = await request(expressApp).get('/');
            console.error('This is never reached with a correct res', res);
        });
    });
});
//# sourceMappingURL=app.test.js.map