class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
    }

    calculatePrice(distance, time) {
        const fare = this.baseFare + (distance * this.costPerMile) + (time * this.costPerMinute) + this.bookingFee;
        return fare;
    }
}

const uberXL = new UberPriceCalculator(5.0, 2.0, 0.3, 2.5);
const distance = 10; 
const time = 30;
const price = uberXL.calculatePrice(distance, time);
console.log(`The estimated Uber XL price for a ${distance}-mile, ${time}-minute ride is $${price.toFixed(2)}`);
