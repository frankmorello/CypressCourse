Cypress.Commands.add("login",()=>{

    cy.fixture("commands").then((sel) =>{
     cy.get(sel.usernameField).type(sel.username)
     cy.get(sel.PasswordField).fill(sel.password)
     cy.get(sel.LoginButton).click()
    })
})

//another way of ceeating custom commands by passing two arguements
Cypress.Commands.add("login2", (username, password)=>{
cy.fixture("commands").then((sel)=>{
     
     cy.get(sel.usernameField).type(username)
     cy.get(sel.PasswordField).fill(password)
     cy.get(sel.LoginButton).click()

})
})

//Another way of creating custom command for login

Cypress.Commands.add("tyAssert", (pomFile,element,words)=>{
    cy.fixture(pomFile).then(()=>{
        cy.get(element).should("be.visible").fill(words)
    })
})

//creating custom command for button click only
Cypress.Commands.add("LoginClick", (pomFile,element)=>{
    cy.fixture(pomFile).then(()=>{
        cy.get(element).should("be.visible").click()
    })
})
