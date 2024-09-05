describe('Event Registration Flow - Single', () => {
    beforeEach(() => {
        // Open the registration page for the specific event
        cy.visit('https://evexus-dev.com/event/example/register/161/email');
    });

it('RS_005: Purchase 1 Registration type ticket, check in the shopping cart, then proceed to payment.', () => {
    // Generate a random email address
    const randomEmail = `user${Math.floor(Math.random() * 10000)}@temp.com`;

    // Enter the email and proceed to the next step
    cy.get('input[name="email"]').type('Tim' + randomEmail);
    cy.get('button').contains('Next').click();
    
    // Select the options for the ticket type
    cy.contains('p.chakra-text', 'Payment first for Attendee')
      .should('be.visible')
      .click();
    cy.get(':nth-child(1) > .css-ocvkfk > .css-1k5xhp3 > .chakra-checkbox > .chakra-checkbox__control').click();
    cy.get(':nth-child(2) > .css-ocvkfk > .css-1k5xhp3 > .chakra-checkbox > .chakra-checkbox__control').click();

    // Proceed to the next step
    cy.get('button').contains('Next').click();
    
    // Add the registration ticket to the cart and proceed
    cy.get(':nth-child(1) > .css-jv2lt0 > .chakra-text').click();
    cy.get('button').contains('Add to cart').click();
    cy.get('button').contains('Next').click();
    cy.wait(500);
    cy.get('button').contains('Next').click();
    cy.wait(500);
    cy.get('button').contains('Next').click();
    cy.wait(500);
    cy.get('button').contains('Next').click();
    cy.wait(500);
    cy.get('button').contains('Next').click();
    cy.wait(500);
    // Fill in billing details
    cy.xpath('//input[@name="firstName"]').type('Wall');
    cy.xpath('//input[@name="lastName"]').type('Stryder');
    cy.xpath('//input[@name="billingStreet"]').type('37 Wall');
    cy.xpath('//input[@name="billingCity"]').type('Yorktown');
    cy.xpath('//input[@name="billingCity"]').click();
    cy.xpath('//input[@name="billingState"]').type('United States');
    cy.xpath('//input[@name="billingPostcode"]').type('1177720');
    cy.get('.css-1qzlcn7').click();
    cy.contains('Aruba').click();
    cy.get('.css-f53yi3').click();
    
    // Proceed to payment
    cy.get('.chakra-stack').contains('Pay by credit card').click();
    cy.get(':nth-child(2) > .chakra-button').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .chakra-button').click();
    cy.wait(8000);
    cy.contains('Card Number').type('4242424242424242');
    cy.get('#EWAY_CARDNAME').type('John Doe');
    cy.get('#EWAY_CARDEXPIRYMONTH').select('January');
    cy.get('#EWAY_CARDEXPIRYYEAR').select('25');
    cy.get('button').contains('Confirm').click();
    cy.get('input[name="date of birth"]').type('2001-08-12');
    cy.get('.css-1cef9o8').click();
    cy.wait(2000);
    cy.get('#react-select-4-option-0').click({ force: true });
    cy.get('button').contains('Next').click();
    
    // Fill in additional information and complete registration
    const organisationName = 'Acme Corp';
    const positionTitle = 'Software Engineer';
    cy.get('input.chakra-input.css-1pyxv3z[name="organisation"]')
      .type(organisationName)
      .should('have.value', organisationName); // Verify the value
    cy.get('input.chakra-input.css-1pyxv3z[name="position"]')
      .type(positionTitle)
      .should('have.value', positionTitle); // Verify the value
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Complete registration').click();
  });
});