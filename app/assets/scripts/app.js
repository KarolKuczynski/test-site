var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';

class Adult extends Person {
    payTax() {
        console.log(this.name + " now owes $0 in taxes.")
    }
}

var john = new Adult('John','blue');
john.greet();
john.payTax();

//$('h1').remove();