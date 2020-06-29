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
   for (let index = 0; index < 20; index ++){
      const coinFlip = display20Flips
      display20Flips.append(coinFlip)
   }
}

function display20Images (){
   for (let index = 0; index < 20; index ++){
      
      display20Images.innerHTML()
   }
}