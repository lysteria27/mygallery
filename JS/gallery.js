function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
       x = document.getElementById('image');
       x.style.backgroundImage = "url("+previewPic.src+")";
       y = document.getElementById('image desc');
       y.innerHTML = previewPic.alt;
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       x = document.getElementById('image');
       x.style.backgroundImage = "url('')";
       y = document.getElementById('image desc');
       y.innerHTML = "Hover over an image below to display here.";
           
       }

       function addTabFocus(){
        /*
        1) Add a console.log message to make sure that your event triggers

        2) Write a for loop to loop through each image

        3) Add the tabindex attributes 
        */
        console.log("Event occurence succesful!");

        images = document.getElementsByClassName('preview');
        for(var i = 0; i < images.length; i++){
            images[i].setAttribute("tabindex","0");
        }
       }