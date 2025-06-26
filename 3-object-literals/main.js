function createGroceryItem ( name, quantity ) 
{
    return {
        name,
        quantity,

        display() {
            console.log(`${this.quantity} x ${this.name}`);
        }
    };
}

const newGroceryItem = createGroceryItem('Orange', 5);
newGroceryItem.display();
