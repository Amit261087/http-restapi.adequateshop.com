const faker = require('faker')
describe('Customer', () => {

    let customerid;
    let name = faker.internet.userName();
    let email = faker.internet.email();
    let location = faker.address.city();

    const baseURL = 'http://restapi.adequateshop.com/api'

    it('Create Customer', () => {
        cy.request({
            method: 'POST',
            url: `${baseURL}/Customer`,
            body:{
                id: 0,
                name: name,
                email: email,
                location: location
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(201);
            expect(response.statusText).to.equal('Created')
            //expect(email).to.equal(response.body.email)
            //expect(name).to.equal(response.body.name)
            cy.log("Name: "+response.body.name)
            cy.log("Email: "+response.body.email)
            customerid = response.body.id
            cy.log("ID: "+customerid)
        })        
    });

    it('Get All Customers', () =>{
        cy.request({
            method: 'GET',
            url: `${baseURL}/Customer`
        }).then((response)=>{
            cy.log(JSON.stringify(response));
            expect(response.status).to.equal(200);
            expect(response.statusText).to.equal('OK');
        })
    });

    it('Get User By ID', () => {
        cy.request({
            method: 'GET',
            url: `${baseURL}/Customer/${customerid}`
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
            expect(customerid).to.equal(response.body.id)
            expect(name).to.equal(response.body.name)
            expect(email).to.equal(response.body.email)
        })        
    });

    it.skip('Update User by ID', () => {
        cy.request({
            method: 'PUT',
            url: `${baseURL}/Customer/Customer/${customerid}`,
            body:{
                id: 0,
                name: name,
                email: email,
                location: location
            }
        }).then((response)=>{
            cy.log(JSON.stringify(response))
        })        
    });

    it.skip('Delete User By ID', () => {
        cy.request({
            method: 'DELETE',
            url: `${baseURL}/Customer/Customer/${customerid}`
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        })        
    });
});