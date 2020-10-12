function taxCalculator(state){
    function displayName(personName){
        console.log('Calculating taxes for ' + personName + ' living in ' + state);
    }

    function calculateTax(){
        if (state === 'GA'){
            console.log('Tax is 7%')
        } else {
            console.log('Tax is 4%')
        }

    }

    return {displayName, calculateTax};
}

georgiaTax = taxCalculator('GA');
georgiaTax.displayName('Susan');

texasTax = taxCalculator('TX');
texasTax.displayName('Mike');

texasTax.calculateTax();
georgiaTax.calculateTax();

