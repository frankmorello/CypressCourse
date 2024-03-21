let el
describe("creating custom login commands", ()=>{

    before(()=>{

        cy.fixture("commands").then((sel)=>{
            el=sel
        })
        cy.visit("/")
        cy.on("uncaught:exception",()=>{
            return false
        })
    })

    it.skip("user can login successfully", ()=>{
        //cy.login()
        cy.login2(el.username, el.password)
    })

    it("user can login using reusable functions", ()=>{
        cy.tyAssert("commands",el.usernameField,el.username)
        cy.tyAssert("commands", el.PasswordField, el.password)
        cy.LoginClick("commands", el.LoginButton)
    })
})