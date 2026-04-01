
        const IMAGES =[
            "https://images.pexels.com/photos/34899288/pexels-photo-34899288.jpeg",
            "https://images.pexels.com/photos/28321263/pexels-photo-28321263.jpeg",
            "https://images.pexels.com/photos/28445829/pexels-photo-28445829.jpeg",
            "https://images.pexels.com/photos/29269763/pexels-photo-29269763.jpeg",
            "https://images.pexels.com/photos/28445830/pexels-photo-28445830.jpeg",
            "https://images.pexels.com/photos/19671341/pexels-photo-19671341.jpeg",
            "https://images.pexels.com/photos/35779075/pexels-photo-35779075.jpeg",
            "https://images.pexels.com/photos/13785147/pexels-photo-13785147.jpeg"
        ];

        let currentindex =0;
        function showCurrentIndexImage(){
            const imgElement =document.getElementById("main-image");
   
            imgElement.src = IMAGES[currentindex];
        }

        function slideleft(){
            if(currentindex = 0){
                currentindex--;
            }else{
                currentindex = IMAGES.length-1;
            } 
            showCurrentIndexImage();
        }

        function slideright(){
            if(currentindex < IMAGES.length-1){
                currentindex++;
            }else{
                currentindex =0;
            }
            showCurrentIndexImage();
        }
        function showImage(index){
            currentindex = index ;
            showCurrentIndexImage();
        }
        function createGalleryPreview(){
            const galleryPreviewContainer =document.getElementById("gallery-preview");
        
            galleryPreviewContainer.innerHTML = "";

            for(let i=0; i <IMAGES.length; i++){

                galleryPreviewContainer.innerHTML += `<img src='${IMAGES[i]}' class='preview-img' onclick ='showImage(${i})' />`;

            }
        }
         createGalleryPreview()
 