describe("Automating new tab",()=>{

before(()=>{
    cy.visit("https://the-internet.herokuapp.com/windows")
    Cypress.on("Uncaught:exception",()=>{
        return false
    })
})
//it.only runs one test
//it.skip skips the test and run another
//it runs the test

it.skip("this action will open a new tab",()=>{
    cy.get(".example > a").click()
})

it.only("this action wull not open up a new tab",()=>{
    cy.get(".example > a").invoke("removeAttr", "target").click()
})

})