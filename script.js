class Hamburger{

    static SIZE_SMALL = 'small';
    static SIZE_BIG = 'big';
    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';
    static TOPPING_SEASONING = 'seasoning';
    static TOPPING_MAYO = 'mayo';

    constructor(size, filling) {
        this.size = size;
        this.filling = filling;
        this.toppings= [];
    }

    addTopping(value){
        this.toppings.push(value);
    }

    calculatePrice() {
        let price = 0

        switch(this.size){
            case 'small':
                price += 50;
                break;

            case 'big':
                price += 100;
                break;  
        }

        switch(this.filling) {
            case 'cheese': 
                price += 10;
                break;

            case 'salad':
                price += 20;
                break;

            case 'potato':
                price += 15;
                break;      
        }

        for(let i = 0; i < this.toppings.length; i++) {
            switch(this.toppings[i]){
                case 'seasoning':
                    price += 15;
                    break;
                
                case 'mayo':
                    price += 20;
                    break;    
            }
        }

        return price;
    }

    calculate() {
        let calories = 0;

        switch(this.size){
            case 'small':
                calories += 20;
                break;

            case 'big':
                calories += 40;
                break;  
        }

        switch(this.filling) {
            case 'cheese': 
                calories += 20;
                break;

            case 'salad':
                calories += 5;
                break;

            case 'potato':
                calories += 10;
                break;      
        }

        for(let i = 0; i < this.toppings.length; i++) {
            switch(this.toppings[i]){
                case 'mayo':
                    calories += 5;
                    break;
                default:
                    calories += 0;
                    break;        
            }
        }

        return calories;
    }
}


// маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SEASONING);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());