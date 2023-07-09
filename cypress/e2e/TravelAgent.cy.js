const faker = require('faker')

let agentid;
let agentname = faker.internet.userName();
let agentemail = faker.internet.email();

describe('Travel Agent', () => {

    it('Create Travel Agent', () => {
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/TravelAgent',
            headers:{
                'Content-Type': "application/json",
                Accept: "application/json"
            },
            body:{
                agent_name: agentname,
                agent_email: agentemail,
                agent_location: faker.address.city()
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created')
            agentid = response.body.id;
            cy.log(agentid)
        });    
    });

    it('Get All Travel Agents', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/TravelAgent'
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK')
        })        
    });

    it('Get Travel Agent by ID', () => {
        cy.request({
            method: 'GET',
            url: `http://restapi.adequateshop.com/api/TravelAgent/${agentid}`
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK')
            expect(agentname).to.equal(response.body.agent_name)
            expect(agentemail).to.equal(response.body.agent_email)
        })        
    });

    it.skip('Delete Travel Agent by ID', () => {
        cy.request({
            method: 'DELETE',
            url: `http://restapi.adequateshop.com/api/TravelAgent/${agentid}`
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK')
        })        
    });
});