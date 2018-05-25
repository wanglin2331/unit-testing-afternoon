let cart = require('./cart');
let cars = require('./data/cars');



describe('Cart Properties', ()=>{
    test('cart property is an empty Array', ()=>{
        expect(Array.isArray(cart.cart)).toBeTruthy();
        expect(cart.cart.length).toEqual(0);
        
    });

    test('total property equals 0', ()=>{
        expect(cart.total).toEqual(0);        
    });   
})


describe('Cart Methods', ()=>{

    afterEach(function() {
        cart.total=0;
        cart.cart=[]
      });


    test('addToCart is adding cars to cart property', ()=>{
        cart.addToCart(cars[0]);

        expect(cart.cart.length).toEqual(1);
        expect(cart.cart[cart.cart.length-1]).toEqual(cars[0])
    });

    test('addToCart is adding total price on each call', ()=>{
        cart.addToCart(cars[0]);

        expect(cart.total).toEqual(cars[0].price);
    });

    test('removeFromCart is removing item from cart property', ()=>{
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.removeFromCart(0, cars[0].price);

        expect(cart.cart.length).toEqual(1);
        expect(cart.cart[cart.cart.length-1]).toEqual(cars[1])
    });

    test('removeFromCart is substracting price from total property', ()=>{
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.removeFromCart(0, cars[0].price);

        expect(cart.total).toEqual(cars[1].price)

    });

    test('check out is setting cart and total to 0', ()=>{
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        cart.checkout();
        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);
    });
})