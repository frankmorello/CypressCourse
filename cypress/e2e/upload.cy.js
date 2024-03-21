var el
describe('upload document', () => {

  before(()=>{
    /// this code will run first before running every other tests
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.fixture("uploadElements").then((sel)=>{
        el=sel
    })

})

it( "user can upload documents", () =>{

cy.get(el.chooseFieldButton).attachFile("homepage.png")
cy.get(el.uploadButton).click();
})

})