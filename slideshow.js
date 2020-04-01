//Slideshow Javascript Lab
//Date: 4/1/2020

//create a single object name "slideshow"
var slideshow = {
    //create an array that contains the names as strings
    //    array:  [0]        [1]        [2]
    photoList: ['NSX', 'S2000', 'GTR', 'Supra'],
    
    //integer for currentPhotoIndex of where the current location is
    currentPhotoIndex: 0,

    //function that moves through the if statements to see if it reaches the end
    nextPhoto: function(){

        //this states the end of the slideshow
        if(this.currentPhotoIndex === (this.photoList.length-1)){
            console.log("End of slideshow");
        }
        //this shows the current photo
        else {
            this.currentPhotoIndex++;           //current photo location where its about to iterates
            console.log(this.photoList[this.currentPhotoIndex]); 
        }
    },
    
    //function for previous photo function
    prevPhoto: function(){
        if(this.currentPhotoIndex === 0){
            console.log("Beginning of slideshow");
        }
        else {
            this.currentPhotoIndex--;       // current photo where it will go back to beginning
            console.log(this.photoList[this.currentPhotoIndex]);
        }
    },
    //get current photo function
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];  
    },

    playInterval: null,

    play: function(){
        var one = this;
        this.playInterval = setInterval(function(){
            one.nextPhoto();
        }, 2000)
    },

    pause: function(){
        clearInterval(this.playInterval);
    },

    

    
}// this is the end brack of object var = slideshow

//shows the outputs of the codes
console.log(slideshow.getCurrentPhoto());
slideshow.play();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// slideshow.nextPhoto();
// console.log(slideshow.getCurrentPhoto());
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();
// slideshow.prevPhoto();




