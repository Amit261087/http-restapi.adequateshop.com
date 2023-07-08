const faker = require('faker')

let agentid;

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
                agent_name: faker.internet.userName(),
                agent_email: faker.internet.email(),
                agent_location: faker.address.city()
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created')
            agentid = response.body.id;
            cy.log(agentid)
        })        
    }); 
});