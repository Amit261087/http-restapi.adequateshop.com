describe('Metadata', () => {

    it('Get Employess', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Metadata/GetEmployees'
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        });     
    });

    it('Get Users', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Metadata/users'
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        });     
    });
    
    it('Get Users by City', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Metadata/GetUsersByParam?city=London'
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        });     
    });
});