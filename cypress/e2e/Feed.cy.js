describe('Feed', () => {

    it('Get News Feed', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Feed/GetNewsFeed'
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        });      
    });
    
    it('Get News Feed by Page No.', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Feed/GetNewsFeed?page=2'
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        });      
    });

    it.skip('Get All Feeds Comment', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Feed/GetFeedsComment'
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        });      
    });
    
    it.skip('Get Feeds Comment by Page No.', () => {
        cy.request({
            method: 'GET',
            url: 'http://restapi.adequateshop.com/api/Feed/GetFeedsComment?page=2'
        }).then((response)=>{
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
        });      
    });


});