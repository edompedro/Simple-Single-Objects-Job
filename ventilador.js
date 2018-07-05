class Ventilator {
    constructor(watts = 0, brand = '', minRPM = 0, maxRPM = 0) {
        this.watts = watts;
        this.brand = brand;
        this.minRPM = minRPM;
        this.maxRPM = maxRPM; 
        this.on = false;
        this.off = true;
        this.velocity = 0;
        this.rpm = 0;
    }

    speedUp() {
        this.on = true;
        this.off = false;
        this.velocity++;
        this.rpm +=100;
        if (this.velocity===4) {
            this.velocity--;
        }
        if (this.rpm===400) {
            this.rpm-=100;
        }
    }
    slowDown() {
        if (this.rpm!=0) {
            this.rpm -=100;
        }
        if (this.velocity!=0) {
            this.velocity--;
        }
        if (this.velocity===0) {
            this.on = false;
            this.off = true;
        }
    }
    turnOff() {
        this.on = false;
        this.off = true;
        this.rpm = 0;
        this.velocity = 0;
    }
}

const vent = new Ventilator(200, 'Arno', 100, 300);
console.log(vent.watts === 200);
console.log(vent.brand === 'Arno');
console.log(vent.minRPM === 100);
console.log(vent.maxRPM === 300);
console.log(vent.on); // false
console.log(vent.on === false);
console.log(vent.off); // true
console.log(vent.off === true);
console.log(vent.velocity); // 0
console.log(vent.velocity === 0);
console.log(vent.rpm); // 0
console.log(vent.rpm === 0);

vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);  

vent.slowDown();
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);
vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 2);
console.log(vent.rpm === 200); // mean between min and max
vent.speedUp();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 3);
console.log(vent.rpm === 300);
vent.speedUp(); // should not have effect
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 3);
console.log(vent.rpm === 300);
vent.slowDown();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 2);
console.log(vent.rpm === 200);
vent.slowDown();
console.log(vent.on === true);
console.log(vent.off === false);
console.log(vent.velocity === 1);
console.log(vent.rpm === 100);
vent.slowDown();
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);
vent.slowDown(); // should not have effect
console.log(vent.on === false);
console.log(vent.off === true);
console.log(vent.velocity === 0);
console.log(vent.rpm === 0);

const vent2 = new Ventilator(250, 'GE', 80, 400);
console.log(vent2.watts === 250);
console.log(vent2.brand === 'GE');
console.log(vent2.minRPM === 80);
console.log(vent2.maxRPM === 400);
console.log(vent2.on === false);
console.log(vent2.off === true);
console.log(vent2.velocity === 0);
console.log(vent2.rpm === 0);
vent2.speedUp();
console.log(vent2.velocity === 1);
console.log(vent2.rpm === 80);
vent2.speedUp();
console.log(vent2.velocity === 2);
console.log(vent2.rpm === 240); // mean between min and max
vent2.speedUp();
console.log(vent2.velocity === 3);
console.log(vent2.rpm === 400);
vent2.turnOff();
console.log(vent2.on === false);
console.log(vent2.off === true);
console.log(vent2.velocity === 0);
console.log(vent2.rpm === 0);
