
//import { selectors } from "../fixtures/elements"
var el
describe('LOGIN SUCCESSFULLY', () => {

  before(()=>{
    //this code handles error incase you have errors it doesnt stop code from running
    Cypress.on("uncaught:exception",()=>{
      return false
    })
    /// this code will run first before running every other tests
    cy.visit('/')
    cy.fixture("locators").then((sel)=>{
      el = sel
    })
  })



    it('login as a locked out user', () => {
 
       cy.get(el.usernameField).clear().fill(el.username2)     
       cy.get(el.PasswordField).clear().fill(el.password)
       //cy.get(el.LoginButton).click()
       cy.findByText("LOGIN").click()
       //cy.get(".bm-burger-button > button").click()
      //cy.contains("Logout").click()
    
     })

     it('login as a problem_user', () => {
       
       cy.get(el.usernameField).clear().fill(el.username3)     
       cy.get(el.PasswordField).clear().fill(el.password)
       cy.get(el.LoginButton).click()
       cy.get(".bm-burger-button > button").click()
      cy.contains("Logout").click()
   
     })

     it('login as a performance_glitch', () => {

      //cy.visit('/')
      cy.get(el.usernameField).clear().fill(el.username4)     
      cy.get(el.PasswordField).clear().fill(el.password)
      cy.get(el.LoginButton).click()
      cy.get(".bm-burger-button > button").click()
      cy.contains("Logout").click()
  
    }) 
      
  
     it('login as a standard user', () => {
 
      //cy.visit('/')
      cy.get(el.usernameField).fill(el.username1)     
      cy.get(el.PasswordField).fill(el.password)
      cy.get(el.LoginButton).click()
      
      cy.get(".bm-burger-button > button").click()
      cy.contains("Logout").click()
     
    })

    

  // it('INPUT VALID CREDENTIALS', () => {

  //   cy.fixture("locators").then((el)=>{

  //   cy.get(el.image).should("be.visible")
  //   cy.get(el.usernameField).fill(el.username)      
  //   cy.wait(2000)
  //   cy.get(el.PasswordField).fill(el.password)

  //   })
  
  //   // cy.get(selectors.image).should("be.visible") // should() function confirms that the image is visible
  //   // cy.get(selectors.usernameField).fill("standard_user") // get username id
  //   // cy.wait(2000)
  //   // cy.get(selectors.PasswordField).fill("secret_sauce") // get password id
  //  })

  // it('INPUT VALID CREDENTIALS', () => {

  //   cy.fixture("locators").then((el)=>{

  //     cy.get(el.LoginButton).click()
  
  //     })

  //   // cy.wait(2000) // this helps to wait for 5 seconds 
  //   // cy.get(selectors.usernameField).should("have.value","standard_user")// this confirms that it has the field name standard_user
  //   // cy.get(selectors.LoginButton).click()
  //   // cy.screenshot("homepage") // the screenshot takes a screen shot of the home page then you pass a name inside the column
  
  // })
})