var el
describe("Automate demo easy web page", ()=>{

before(()=>{
cy.visit("https://demo.seleniumeasy.com/")
cy.fixture("demoElements.json").then((sel)=>{
    el = sel
})
})

it("user can perform all actions",()=>{
cy.get(el.Siteimage).should("be.visible")
cy.get(el.InputFormsDropDownButton).click()
cy.get(el.SimpleFormDemoButton).click()
cy.get(el.MessageFIeld).type(el.Message)
cy.get(el.ShowmessageButton).click()


})
it("user can input on value A field",()=>{
     
    cy.get(el.value1Field).scrollIntoView().fill(4)
    
    })
it("user can input on value B field",()=>{
    
    cy.get(el.value2Field).scrollIntoView().fill(5)
    
    }) 
it("user can click on get total button",()=>{

    cy.get(el.GetTotalButton).click()
    
    })   
})