let coin = {
    state: 0,
    flip: function() {
      if (Math.random()< .5){
         this.state =1
      }else{
         this.state = 0
      }

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },


    toString: function() {
       if (this.state === 0){
          return "heads"
       }else{
          return "tails"
       }
         
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */     
    },
 
// 1. your toHTML function needs the let image = document.createElement('img') in order to return an element.
// 2. your toHTML function the 'else' part needs to have "image.src = " in it still
    toHTML: function() {
       let image = document.createElement('img')
       
        if (this.state ===0){
           image.src = "albertEilnsteinCoin.jpg"
        }else{
           image.src="albertEinsteinBackCoin.jpeg"
         }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
    


};

// 3. your display20Flips function should: 
//     a. set up a for loop that loops 20 times (which you have)
//     b. inside the loop, flip the coin:  coin.flip()
//     c. create a new element 
//     d. append coin.toString() to the new element
//     e. append the new element to the DOM
// 4. your display20Images function should: 
//     a. set up a for loop that loops 20 times (which you have)
//     b. flip the coin:  coin.flip()
//     c. append the coin.toHTML() to the DOM

function display20Flips (){
   for (let index = 0; index < 20; index ++){
      coin.flip()
      
      document.body.append(coin.toString())
   }
}
display20Flips()

function display20Images (){
   for (let index = 0; index < 20; index ++){
     coin.flip()
     document.body.append(coin.toHTML())
   }
}

display20Images()
