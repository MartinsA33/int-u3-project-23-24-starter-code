// Declare variables below to save the different divs of your story.
let body=document.querySelector("body");
let SO=document.querySelector(".story-opening");
let title=document.querySelector(".title");
let opening=document.querySelector("#opening");
let clickA=document.querySelector("#clickA");
let Option1=document.querySelector(".option-one-screen");
let Option2=document.querySelector(".option-two-screen");
let context=document.querySelector("#context");
let img1=document.querySelector("#img1");
let img2=document.querySelector("#img2");
let buttons=document.querySelector(".buttons");
let opt1=document.querySelector(".option-one");
let opt2=document.querySelector(".option-two");
let textLine=0;
let option1B=0;
let option2B=0;






SO.addEventListener("click", function(){
textLine++; 
if(textLine==1){
 opening.innerHTML=" As a chud you should do chud things and not become a chad.";
} else if(textLine==2){
    opening.innerHTML=" Stay a chud.";
} else if( textLine==3){
    opening.innerHTML=" THE CHUD WAY IS THE IS THE ONLY WAY!!!";
    clickA.innerHTML="Click to continue to main story"
} else if(textLine==4){
   SO.style.display="none";
Option1.style.display="block";
buttons.style.display="block";
}

});

opt1.addEventListener("click", function(){
  //  alert("hello");
  option1B++;
  option2B++;
  if(option1B==1){
   body.style.backgroundImage="url('wojak.png')";
   Option1.style.display="none";
   Option2.style.display="block";
   context.innerHTML="9 AM What for breakfast?";
   img1.src="https://www.luckycharms.com/_next/image?url=https%3A%2F%2Fmojo.generalmills.com%2Fapi%2Fpublic%2Fcontent%2Fg6ys8a9QRJu52gFRwfz_sQ_04c57eea-66a2-45cd-a3f2-ecd27146a451_04c57eea-66a2-45cd-a3f2-ecd27146a451.png%3Fv%3Da7636684%26t%3D04c57eea66a245cda3f2ecd27146a451&w=1400&q=75"
    img2.src="https://hannahmageerd.com/wp-content/uploads/2020/04/IMG_2858-683x1024.jpg"
  }else if(option2B==2){
   context.innerHTML="11 AM What next?";
   body.style.backgroundImage="url('Chud.png')";
   img1.src="https://assets.clevelandclinic.org/transform/26568096-7fcc-4713-898d-ca1ed6c84895/exerciseHowOften-944015592-770x533-1_jpg";
   img2.src="https://www.thensf.org/wp-content/uploads/2021/05/woman-napping-400x400-1.jpg"
  } else if(option1B==3){
     context.innerHTML="11 AM What next?";
   img1.src="https://cdn.prod.website-files.com/672d8472c9614f13fcb47654/68af28386e2cf4606fbaa691_types%20of%20showers.png";
    img2.src="https://upload.wikimedia.org/wikipedia/commons/6/67/Scrolling_on_phone.jpg"
} else if(option1B==4){
    context.innerHTML="11:07 AM Break time";
   img1.src="https://img.magnific.com/free-vector/boy-with-curly-hair-reading-book_1308-139994.jpg?semt=ais_hybrid&w=740&q=80";
    img2.src="https://sm.ign.com/ign_pk/lists/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_4npu.jpg"; 
}
  
});

opt2.addEventListener("click", function(){
   // alert("hello");
option2B++;
option1B++;
if(option2B==1){
 Option1.style.display="none";
    Option2.style.display="block";
}else if(option2B==2){
       context.innerHTML="10 AM What next?";
   img1.src="https://assets.clevelandclinic.org/transform/26568096-7fcc-4713-898d-ca1ed6c84895/exerciseHowOften-944015592-770x533-1_jpg";
    img2.src="https://upload.wikimedia.org/wikipedia/commons/6/67/Scrolling_on_phone.jpg";
}else if(option2B==3){
     context.innerHTML="3 PM What next?";
     body.style.backgroundImage="url('Chud.png')";
   img2.src="https://cdn.prod.website-files.com/672d8472c9614f13fcb47654/68af28386e2cf4606fbaa691_types%20of%20showers.png";
    img1.src="https://upload.wikimedia.org/wikipedia/commons/6/67/Scrolling_on_phone.jpg";
}
});
// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });