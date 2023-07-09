const faker = require('faker')

describe('Traveler', () => {

    let travelerid;

    it('Create Traveler', () => {

        const payload = `
        <Travelerinformation>
            <id>${faker.random.number()}</id>
            <name>${faker.internet.userName()}</name>
            <email>${faker.internet.email()}</email>
            <adderes>${faker.address.city()}</adderes>
            <createdat>${faker.date.past().toISOString()}</createdat>
        </Travelerinformation>`

        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Traveler',
            body: payload,
            headers: {
                'Content-Type': 'application/xml',
                Accept: 'application/xml'
            }
        }).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created');
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response.body, 'application/xml');
            const idElement = xmlDoc.getElementsByTagName('id')[0];
            travelerid = idElement.textContent;
            cy.log(travelerid)
        });
    });

    it('Get All Travelers', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Traveler'
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK')
        });     
    });

    it('Get Traveler by ID', () => {
        cy.request({
            method: 'GET',
            url: `http://restapi.adequateshop.com/api/Traveler/${travelerid}`
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK')
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response.body, 'application/xml');
            const idElement = xmlDoc.getElementsByTagName('id')[0];
            const TRAVELERID = idElement.textContent;
            expect(travelerid).to.equal(TRAVELERID)
        });       
    });
});