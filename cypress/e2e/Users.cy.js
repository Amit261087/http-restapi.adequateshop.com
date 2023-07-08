const authAccount = require('../e2e/AuthAccount.cy')
const faker = require('faker')

let token;
let userid;

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
                name: faker.internet.userName(),
                email: faker.internet.email(),
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
});