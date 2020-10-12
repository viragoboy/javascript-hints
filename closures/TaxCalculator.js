class TaxCalculator {

    constructor(state){
        this.state = state;
    };

    displayName(personName){
        console.log('Calculating taxes for ' + personName + ' living in ' + this.state);
    }

    calculateTax(){
        if (this.state === 'GA'){
            console.log('Tax is 7%')
        } else {
            console.log('Tax is 4%')
        }
    }

}

const georgiaTax = new TaxCalculator('GA');
georgiaTax.displayName('Susan');
georgiaTax.calculateTax();

const texasTax = new TaxCalculator('TX');
texasTax.displayName('Mike');
texasTax.calculateTax();
