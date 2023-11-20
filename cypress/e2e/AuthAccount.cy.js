const faker = require('faker')

let email;
let password = 'July@2023';
let token;

module.exports = {
  getToken: ()=> token
}
describe('Account Registration', function(){
  
  it('Registration', function(){
    cy.request({
      method: 'POST',
      url: 'http://restapi.adequateshop.com/api/AuthAccount/Registration',
      body:{
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: password
      }
    }).then((response)=>{
      cy.log(JSON.stringify(response));
      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
      expect(response.body.message).to.equal('success')
      email = response.body.data.Email;    
      cy.log(email)
    })    
  })

  it('Login', function(){
    cy.request({
      method: 'POST',
      url: 'http://restapi.adequateshop.com/api/AuthAccount/Login',
      body:{
        email: email,
        password: password
      }
    }).then((response)=>{
      //cy.log(JSON.stringify(response))
      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
      expect(response.body.message).to.equal('success')
      token = response.body.data.Token;
      cy.log(token)
    })
  })
})