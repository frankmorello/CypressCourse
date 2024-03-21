describe("automate iframe", ()=>{

    before(()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        //this code handles error incase you have errors it doesnt stop code from running
    Cypress.on("uncaught:exception",()=>{
        return false
      })
    })


    it("can write on iframe field",()=>{
      ///this is the code to write on iframe 
     cy.get("#mce_0_ifr").then(($iframe)=>{
        let iframebody = $iframe.contents().find("body")
        cy.wrap(iframebody).clear().type("my name is obinna")
     })
     
    })
})