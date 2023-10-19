class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle(5);

console.log(myCircle.getRadius());
console.log(myCircle.getArea());
console.log(myCircle.getCircumference());

myCircle.setRadius(7);

console.log(myCircle.getRadius());
