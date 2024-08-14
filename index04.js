function calculateTax() {
    return function(income) {
        let taxRate;
        
        if (income <= 100) {
            taxRate = 0.1; 
        } else if (income <= 200) {
            taxRate = 0.2; 
        } else if (income <= 300) {
            taxRate = 0.3; 
        } else {
            taxRate = 0.4; 
        }

        return income * taxRate;
    };
}

const taxCalculator = calculateTax();

console.log(`Tax on $8,000 income: $${taxCalculator(8)}`);  
console.log(`Tax on $10 income: $${taxCalculator(10)}`); 
console.log(`Tax on $200 income: $${taxCalculator(200)}`); 
console.log(`Tax on $50 income: $${taxCalculator(50)}`); 
