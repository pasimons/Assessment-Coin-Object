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
        let image = document.createElement('img');
        document.write('<img src="albertEilnsteinCoin.jpg" alt="albert eilnte coin" width="500" height="600"></img>')
        image.append()
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }

};