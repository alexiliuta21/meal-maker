const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts:[]
  },
  
  get appetizers(){},
  get mains () {},
  get desserts() {},
  set appetizers(appetizerIn) {},
  set mains(mainsIn) {},
  set desserts(dessertsIn) {},
  
  get courses () {
    return {
      appetizers: this.appetizers, 
      mains: this.mains,
      desserts: this.desserts
    }
},
addDishToCourse (courseName, dishName, dishPrice)  {
   const dish = {
     name: this.dishName,
     price: this.dishPrice
   }
   this._courses.appetizers.push(dish); 
   this._courses.mains.push(dish); 
   this._courses.desserts.push(dish);   
},

getRandomDishFromCourse: function (courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
},

generateRandomMeal: function() {
  const appetizer = this.getRandomDisFromCourses('appetizers');
  const main = this.getRandomDisFromCourses('mains');
  const dessert = this.getRandomDisFromCourses('desserts');
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name}, ... The price is $${totalPrice}.`;
}
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('main', 'Pizza', 10.25);
menu.addDishToCourse('dessert', 'Chocolate fondue', 6.50);

console.log(menu);
