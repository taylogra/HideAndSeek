let picArray = []; //hold the names of the images
let match = document.getElementById("match");
let matchPic;

let picPic = function(arr, remove){

    let randNum = Math.floor(Math.random()* arr.length);
    let returnPic;

    returnPic = arr[randNum];

    if(remove){
        arr.splice(randNum, 1);
    }

    return returnPic;


};

let setUp = function() {

    picArray = ["image1.jpg", "image2.jpg", "image3.jpeg", "image4.jpg"]
    match.src = picPic(picArray, false);
};
