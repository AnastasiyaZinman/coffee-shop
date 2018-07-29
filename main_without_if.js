var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    let i=0;
    while ((drinkType!=this.drinkRequirements[i])&&(i<this.drinkRequirements.length))
    i++;
    ((i<this.drinkRequirements.length)&&(this.beans>=this.drinkRequirements[drinkType]))? this.beans-=this.drinkRequirements[drinkType]:console.log("Sorry, we don't make a "+drinkType +" or not enoght beans");

//  if((drinkType in this.drinkRequirements)&&(this.beans>=this.drinkRequirements[drinkType]))
//   {console.log("We can make " + drinkType);
//   this.beans-=this.drinkRequirements[drinkType];
//   console.log(this.beans);
// }
// else if(this.beans<this.drinkRequirements[drinkType]) {console.log("Sorry, we're all out of beans!")}
// else {console.log("Sorry, we don't make a "+drinkType)}
}
}
console.log(coffeeShop.beans);
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");