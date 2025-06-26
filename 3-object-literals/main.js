let groceryItem  = {
    name: 'Apple',
    quantity: 44,
    display: function() {
        console.log(`Item: ${this.name}, Quantity: ${this.quantity}`);
    }
}; 

groceryItem.display();
