// A key element of a closure is a function which contains other functions
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

    // The return value of a closure are the functions contained within it.
    // One can say that functions 'displayName' and 'calculateTax' are enclosed in a scope 
    // containing a given value for variable 'state'.
    return {displayName, calculateTax};
}

georgiaTax = taxCalculator('GA');
georgiaTax.displayName('Susan');

texasTax = taxCalculator('TX');
texasTax.displayName('Mike');

texasTax.calculateTax();
georgiaTax.calculateTax();

