const faker = require('faker')

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
                //id: 0,
                tourist_name: faker.internet.userName(),
                tourist_email: faker.internet.email(),
                tourist_location: faker.address.city()
                //createdat: faker.date.past()
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created')
        })
        
    });
    
});