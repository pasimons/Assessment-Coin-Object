let coin = {
    state: 0,
    flip: function() {
        for(let i = 0; i < state.length; i++){
           return  this.state(Math.random())
        }
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },


    toString: function() {
        if (heads > 1) {
           result = heads;
          } else {
           result = tails;
          }
          return this.result;
         
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */     
    },
 

    toHTML: function() {
        if (this.state ===0){
           image.src = "albertEilnsteinCoin.jpg"
        }else{"albertEinsteinBackCoin.jpeg"}
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }

};

function display20Flips (){
   for (let index = 20; index < display20Flips.length; index ++){
      const coinFlip = display20Flips
      display20Flips.append(coinFlip)
   }
}

function display20Images (){
   for (let index = 20; index < display20Images.length; index ++){
      const letsSee = display20Images
      display20Images.innerHTML()
   }
}