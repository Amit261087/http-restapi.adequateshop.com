const faker = require('faker')

let touristid;

describe('Tourist', () => {

    it('Create Tourist', () => {
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: {
                id: 0,
                tourist_name: faker.internet.userName(),
                tourist_email: faker.internet.email(),
                tourist_location: faker.address.city(),
                createdat: faker.date.past()
            }
        }).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');
            touristid = response.body.id;
            cy.log(touristid)
        })
    });

    it('Get All Tousrists', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Tourist'
        }).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        });
    });

    it('Get Tourist by ID', () => {
        cy.request({
            method: 'GET',
            url: `http://restapi.adequateshop.com/api/Tourist/${touristid}`
        }).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        });
    });

    it.skip('Update Tourist by ID', () => {
        cy.request({
            method: 'PUT',
            url: `http://restapi.adequateshop.com/api/Tourist/${touristid}`,
            body: {
                id: 0,
                tourist_name: faker.internet.userName(),
                tourist_email: faker.internet.email(),
                tourist_location: faker.address.city(),
                createdat: faker.date.past()
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
        })
    })

    it.skip('Get Tourist by ID', () => {
        cy.request({
            method: 'DELETE',
            url: `http://restapi.adequateshop.com/api/Tourist/${touristid}`
        }).then((response) => {
            cy.log(JSON.stringify(response));
        })
    })
});