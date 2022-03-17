
function closureEx(taxPercent) {
    return function(amount) {
        console.log(taxPercent*amount);
    }
}

let tax = 1.5;

let func = closureEx(tax);
func(1000);

