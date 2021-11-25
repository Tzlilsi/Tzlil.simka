var imgs=["hello-world__5534582659003.jpg","images.png"];
var i=0;
function play(){
    console.log("in");
    setTimeout(()=>{
        document.getElementById("img").src = imgs[i];
        i++;
        if (i<imgs.length) {
            play();
        }
        else {
            i=0;
        }
    },500);
}
