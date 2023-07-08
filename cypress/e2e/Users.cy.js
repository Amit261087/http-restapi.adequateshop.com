const authAccount = require('../e2e/AuthAccount.cy')
const faker = require('faker')

let token;
let userid;
let email = faker.internet.email();
let name = faker.internet.userName();

describe('Users', () => {

    before(function(){        
        token = authAccount.getToken();        
    })

    it('Create User', () => {
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Users',
            headers:{
                Authorization: `Bearer ${token}`
            },
            body:{
                id: 0,
                name: name,
                email: email,
                profilepicture: "string",
                location: faker.address.city(),
                createdat: faker.date.past()
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');
            userid = response.body.id;
            cy.log(userid)
        })        
    });

    it('Get All Users', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Users',
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        })        
    });

    it('Get User By UserID', () => {
        cy.request({
            method: 'GET',
            url: `http://restapi.adequateshop.com/api/Users/${userid}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
            expect(email).to.equal(response.body.email);
            expect(name).to.equal(response.body.name);
            expect(userid).to.equal(response.body.id);
        })        
    });

    it.skip('Delete User By UserID', () => {
        cy.request({
            method: 'DELETE',
            url: `http://restapi.adequateshop.com/api/Users/${userid}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        })        
    });
});