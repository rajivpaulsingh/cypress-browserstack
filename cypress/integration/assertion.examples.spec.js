describe('Assertions', () => {
    it.skip('tips and ideas', () => {

        //retry until we find 5 matching selected lists
        cy.get('li.selected').should('have.length', 5)

        //retry until input does not have class disabled
        cy.get('from').find('input').should('not.have.class', 'disabled')
    
        //retry until textarea has the correct value
        cy.get('textarea').should('have.value', 'Placeholder')

        //retry until span does not contain 'click me'
        cy.get('a').parent('span').should('not.contain', 'click me')

        //retry until the button is visible
        cy.get('button').should('be.visible')

        //retry until the loading spinner no longer exists
        cy.get('spinner').should('not.exist')
    })
})