let el
describe("Cpress Course Project", () => {

    beforeEach(() => {

        cy.fixture("ProjectPhpTravelsElements").then((sel) => {
            el = sel
        })
        cy.visit("https://www.phptravels.net/")
        cy.on("uncaught:exception", () => {
            return false
        })
    })

    it("user can Search Flight Using Round Trip Check", () => {
        //cy.get(el.OneWayCheck).click()
        cy.get(el.RoundTripCheck).click()
        cy.get(el.FlyingFromDropDown).click()
        cy.get(el.FlyingFromValue).click().wait(3000)
        cy.get(el.DestinationToDropDown).click()
        cy.get(el.DestinationValue).click().wait(3000)
        cy.get(el.DepartureDate).click()
        cy.get(el.ArrivalDate).click()
        cy.get(el.TicketClass).select(1)
        cy.get(el.NumberOfPassengersDropdown).click()
        cy.get(el.SearchButton).click()
    })

    it("User Can Search Flight using One way check and Filter Search Results", () => {
        cy.get(el.OneWayCheck).click()
        cy.get(el.FlyingFromDropDown).click().wait(3000)
        cy.get(el.FlyingFromValue).click().wait(3000)
        cy.get(el.DestinationToDropDown).click().wait(3000)
        cy.get(el.DestinationValue).click().wait(3000)
        cy.get(el.DepartureDate).click().wait(3000)
        cy.get(el.TicketClass).select(0).wait(3000)
        cy.get(el.NumberOfPassengersDropdown).click().wait(3000)
        cy.get(el.SearchButton).click()
        cy.get(el.PriceAscending).click().wait(3000)//filter by price ascending
        cy.get(el.PriceDescending).click().wait(3000) //filter by price descending
        cy.get(el.DirectFlightSort).click()//filter direct flight
        cy.get(el.FilterByPakistanAirline).click()//filter Parkistan Airline flight
        //cy.get(el.FilterByQatarAirline).click()//filter Qatar Airline flight

    })

    it("User Can Select and Book Flight", () => {
        cy.get(el.OneWayCheck).click()
        cy.get(el.FlyingFromDropDown).click().wait(3000)
        cy.get(el.FlyingFromValue).click().wait(3000)
        cy.get(el.DestinationToDropDown).click().wait(3000)
        cy.get(el.DestinationValue).click().wait(3000)
        cy.get(el.DepartureDate).click().wait(3000)
        cy.get(el.TicketClass).select(0).wait(3000)
        cy.get(el.NumberOfPassengersDropdown).click().wait(3000)
        cy.get(el.SearchButton).click()
        cy.get(el.GetFlightDetails).click()//view flight details
        cy.get(el.SelectFlight).click() // select flight and proceed to booking process
       
        
    })

    it("User Can Enter Passenger Information", () => {
        cy.get(el.OneWayCheck).click()
        cy.get(el.FlyingFromDropDown).click()
        cy.get(el.FlyingFromValue).click()
        cy.get(el.DestinationToDropDown).click()
        cy.get(el.DestinationValue).click()
        cy.get(el.DepartureDate).click()
        cy.get(el.TicketClass).select(0)
        cy.get(el.NumberOfPassengersDropdown).click()
        cy.get(el.SearchButton).click()
        cy.get(el.GetFlightDetails).click()//view flight details
        cy.get(el.SelectFlight).click() // select flight and proceed to booking process
       
        //Enter personal information details
        cy.get(el.FirstNameField).type(el.FirstName)
        cy.get(el.LastNameField).type(el.LastName)
        cy.get(el.EmailField).type(el.Email)
        cy.get(el.PhoneField).type(el.Phone)
        cy.get(el.AddressField).type(el.Address)
        cy.get(el.CountryField).type(el.Country)
        cy.get(el.NationalityField).type(el.Nationality)

        // Enter Travellers information details
        cy.get(el.FirstNameField2).type(el.FirstName)
        cy.get(el.LastName2Field2).type(el.LastName)
        cy.get(el.NationalityField2).type(el.Nationality)
        cy.get(el.PassportNumberFIeld).type(el.PassportNumber)
        cy.get(el.PaymentMethod).click()
        cy.get(el.TermsAndConditionCheck).click()
        cy.get(el.ConfirmBookingButton).click()

        
    })

    it("User Can Confirm Details and Make Payment", () => {
        cy.get(el.OneWayCheck).click()
        cy.get(el.FlyingFromDropDown).click()
        cy.get(el.FlyingFromValue).click()
        cy.get(el.DestinationToDropDown).click()
        cy.get(el.DestinationValue).click()
        cy.get(el.DepartureDate).click()
        cy.get(el.TicketClass).select(0)
        cy.get(el.NumberOfPassengersDropdown).click()
        cy.get(el.SearchButton).click()
        cy.get(el.GetFlightDetails).click()//view flight details
        cy.get(el.SelectFlight).click() // select flight and proceed to booking process
       
        //Enter personal information details
        cy.get(el.FirstNameField).type(el.FirstName)
        cy.get(el.LastNameField).type(el.LastName)
        cy.get(el.EmailField).type(el.Email)
        cy.get(el.PhoneField).type(el.Phone)
        cy.get(el.AddressField).type(el.Address)
        cy.get(el.CountryField).type(el.Country)
        cy.get(el.NationalityField).type(el.Nationality)

        // Enter Travellers information details
        cy.get(el.FirstNameField2).type(el.FirstName)
        cy.get(el.LastName2Field2).type(el.LastName)
        cy.get(el.NationalityField2).type(el.Nationality)
        cy.get(el.PassportNumberFIeld).type(el.PassportNumber)
        cy.get(el.PaymentMethod).click()
        cy.get(el.TermsAndConditionCheck).click()
        cy.get(el.ConfirmBookingButton).click()
        cy.get(el.SelectPaymentMethod).click().wait(5000)
        cy.get(el.ProceedPaymentButton).click()
        cy.get(el.GobackToInvoiceButton).click()
        cy.get(el.YesButton).click({force: true})
        cy.get(el.DownloadAsPdfButton).click()
        cy.screenshot("invoice") 
       
        
    })


    ////reports are included in the reports folder mochawesome.html


})