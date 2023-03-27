/*
You are the owner of a small bakery. You have a pretty well stocked pantry with all the ingredients you could need to run a store of your size, but you want to know exactly how much of a given pastry you can bake given your current ingredient storage. 

Write an algorithm that accepts 2 arguments:
    1) The recipe, which will be an object listing out all the ingredients required and how much of each needed
    2) The pantry, which will be an object listing out the total amount of ingredients your bakery has on hand. 

For example:
If you were given these inputs:
Recipe: { flour: 500, sugar: 200, eggs: 1 }
Pantry: { flour: 1200, sugar: 1200, eggs: 5, milk: 20 }
Your algorithm should return 2, since you have enough flour for only 2 pastries. 

If you were given these inputs:
Recipe: { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
Pantry: { sugar: 500, flour, 2000, milk: 2000 }
Your function should return 0, since you do not have any apples or oil in stock. 
*/

// Write your code below: 