var tripcounter;

var tripiowalat = [] ;
var tripiowalong = [] ;
var trip2iowalat = [] ;
var trip2iowalong = [] ;
var trip3iowalat = [] ;
var trip3iowalong = [] ;
var trip4iowalat = [] ;
var trip4iowalong = [] ;
let fakearray = [] ;
var imagetotal = 25;
var start = 0;
var directions ;


var triplength = 800;
var p5imgs = [];
var p5imgs1 = [];
var p5imgs2 = [];
var p5imgs3 = [];

var vScale = 1;

// mouswheel speed variables 

var speedcounter = 1;
var speedtracker;

// preloading images

var roadimages = [];
var imagecount = 1;
var imagesize = 300;
var animationspeed; 
var urls =[];
var wheelcounter = 0;




async function catchData(){
    var response = await fetch('/roadtrip/directions1.geojson'); 
    const json = await response.json();
    console.log(json)
    var i;
    for (i = 0; i < imagetotal; i++) {
        tripiowalat[i] = json.features[0].geometry.coordinates[triplength+i][0]  
        tripiowalong[i] = json.features[0].geometry.coordinates[triplength+i][1] 
         }  
            }
    async function insertpictures(){
    await catchData();}
    insertpictures();


async function catchData2(){
        var response2 = await fetch('/roadtrip/directions1.geojson'); 
        const json2 = await response2.json();
        console.log(json2 + "json2")
        var i;
        for (i = 0; i < imagetotal; i++) {
            trip2iowalat[i] = json2.features[0].geometry.coordinates[triplength+i][0]  
            trip2iowalong[i] = json2.features[0].geometry.coordinates[triplength+i][1] 
             }  
                }
        async function insertpictures2(){
        await catchData2();}
        insertpictures2();

async function catchData3(){
          var response3 = await fetch('/roadtrip/directions3.geojson'); 
          const json3 = await response3.json();
          console.log(json3 + "json3")
          var i;
          for (i = 0; i < imagetotal; i++) {
              trip3iowalat[i] = json3.features[0].geometry.coordinates[triplength+i][0]  
              trip3iowalong[i] = json3.features[0].geometry.coordinates[triplength+i][1] 
               }  
                  }
          async function insertpictures3(){
          await catchData3();}
          insertpictures3();

async function catchData4(){
            var response4 = await fetch('/roadtrip/directions4.geojson'); 
            const json4 = await response4.json();
            console.log(json4 + "json4")
            var i;
            for (i = 0; i < imagetotal; i++) {
                trip4iowalat[i] = json4.features[0].geometry.coordinates[triplength+i][0]  
                trip4iowalong[i] = json4.features[0].geometry.coordinates[triplength+i][1] 
                 }  
                    }
            async function insertpictures4(){
            await catchData4();}
            insertpictures4();

    
    

//home page ticker

$( document ).ready(function() {
    $( "#opt1").click(function() {
        console.log("clicked");
        $(".p5").css("display", "block");
        $("#opt1").hide()
        $("#opt11").hide()
        $("#opt2").hide()
        $("#opt22").hide()
        $("#opt3").hide()
        $("#opt33").hide()
        $("#opt4").hide()
        $("#opt44").hide()

        console.log(tripiowalong)
        console.log(tripiowalat)
        imgarray = p5imgs


      });

      $( "#opt11").click(function() {
        console.log("clicked");
        $(".p5").css("display", "block");
        $("#opt1").hide()
        $("#opt11").hide()
        $("#opt2").hide()
        $("#opt22").hide()
        $("#opt3").hide()
        $("#opt33").hide()
        $("#opt4").hide()
        $("#opt44").hide()
        imgarray = p5imgs

      });

      $( "#opt2").click(function() {
        console.log("clicked");
        $(".p5").css("display", "block");
        $("#opt1").hide()
        $("#opt11").hide()
        $("#opt2").hide()
        $("#opt22").hide()
        $("#opt3").hide()
        $("#opt33").hide()
        $("#opt4").hide()
        $("#opt44").hide()
        console.log(trip2iowalat)
        console.log(trip2iowalong)
        imgarray = p5imgs1

      });

      $( "#opt22").click(function() {
        console.log("clicked");
        $(".p5").css("display", "block");
        $("#opt1").hide()
        $("#opt11").hide()
        $("#opt2").hide()
        $("#opt22").hide()
        $("#opt3").hide()
        $("#opt33").hide()
        $("#opt4").hide()
        $("#opt44").hide()
        imgarray = p5imgs1

      });

      $( "#opt3").click(function() {
        console.log("clicked");
        $(".p5").css("display", "block");
        $("#opt1").hide()
        $("#opt11").hide()
        $("#opt2").hide()
        $("#opt22").hide()
        $("#opt3").hide()
        $("#opt33").hide()
        $("#opt4").hide()
        $("#opt44").hide()
        imgarray = p5imgs2

      });

      $( "#opt33").click(function() {
        console.log("clicked");
        $(".p5").css("display", "block");
        $("#opt1").hide()
        $("#opt11").hide()
        $("#opt2").hide()
        $("#opt22").hide()
        $("#opt3").hide()
        $("#opt33").hide()
        $("#opt4").hide()
        $("#opt44").hide()
        imgarray = p5imgs2

      });

      $( "#opt4").click(function() {
        console.log("clicked");
        $(".p5").css("display", "block");
        $("#opt1").hide()
        $("#opt11").hide()
        $("#opt2").hide()
        $("#opt22").hide()
        $("#opt3").hide()
        $("#opt33").hide()
        $("#opt4").hide()
        $("#opt44").hide()
        imgarray = p5imgs3

      });

      $( "#opt44").click(function() {
        console.log("clicked");
        $(".p5").css("display", "block");
        $("#opt1").hide()
        $("#opt11").hide()
        $("#opt2").hide()
        $("#opt22").hide()
        $("#opt3").hide()
        $("#opt33").hide()
        $("#opt4").hide()
        $("#opt44").hide()
        imgarray = p5imgs3

      });



      $( "#resetme").click(function() {
        console.log("clicked");
        $(".p5").css("display", "none");
        $("#opt1").show()
        $("#opt2").show()
        $("#opt3").show()
        $("#opt4").show()


      });

      $( "#resetmemore").click(function() {
        
        background(0);
        wheelcounter = 0

      });

      $( "#download").click(function() {
        saveCanvas('myCanvas', 'jpg');
        
        

      });

    
});



setInterval (function () {
    var rect1 = $(".trip1").position();
    var rect2 = $(".trip2").position();
    var rect22 = $(".trip22").position();
    var rect2width = $(".trip2").width();
    var rect3 = $(".trip3").position();
    var rect4 = $(".trip4").position();
    var rect222 = $(".trip2222").position();

if (rect2.left > windowWidth){
    $(".trip22").show()
    $(".trip2").hide()
    $(".trip22").addClass("trip0")
  
}

if (rect4.left > windowWidth){
    console.log("bigger")
    $(".trip4").hide()
    $(".trip44").show()
    $(".trip44").addClass("trip0")
  
}

if (rect3.left > windowWidth){
    console.log("bigger")
    $(".trip3").hide()
    $(".trip33").show()
    $(".trip33").addClass("trip0")
  
}

if (rect1.left > windowWidth){
    console.log("bigger")
    $(".trip1").hide()
    $(".trip11").show()
    $(".trip11").addClass("trip0")
  
}


}, 500);




async function preload() {
    
    for (i = 0; i < imagetotal; i++) {
        p5imgs[i] = loadImage("https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + tripiowalong[i] + "," + tripiowalat[i] + "&fov=120&heading=270&pitch=-0.76&key=AIzaSyCOAbJWj12DA0dyyqNFbaewyAQUuUaoL08")

        var imgarray =  p5imgs1

    }

    for (i = 0; i < imagetotal; i++) {
        p5imgs1[i] = loadImage("https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + trip2iowalong[i] + "," + trip2iowalat[i] + "&fov=120&heading=270&pitch=-0.76&key=AIzaSyCOAbJWj12DA0dyyqNFbaewyAQUuUaoL08")

    }

    for (i = 0; i < imagetotal; i++) {
      p5imgs2[i] = loadImage("https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + trip3iowalong[i] + "," + trip3iowalat[i] + "&fov=120&heading=270&pitch=-0.76&key=AIzaSyCOAbJWj12DA0dyyqNFbaewyAQUuUaoL08")

  }

  for (i = 0; i < imagetotal; i++) {
    p5imgs3[i] = loadImage("https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + trip4iowalong[i] + "," + trip4iowalat[i] + "&fov=120&heading=270&pitch=-0.76&key=AIzaSyCOAbJWj12DA0dyyqNFbaewyAQUuUaoL08")

}

     }




r = [];
g = [];
b = [];
var imagenum = 0

function setup() {
    pixelDensity(1);
    let cnv = createCanvas(windowWidth*.5,windowHeight).addClass('p5');
    cnv.position(windowWidth*.25, 0, 'fixed');
    background (0)
    // console.log("p5roadimage" + urls[1])
    setInterval(timeIt, 200);
    image(p5imgs[imagenum],0,100,width,.5*width)
    
     }


  //scrolling function
  
  var wheelcounter = 0



function pixelpaint (imgarray){
    wheelcounter = wheelcounter + 1 
    for (var y = 0; y<imgarray[0].height; y++){
        fill(imgarray[imagenum].pixels[index + 0], imgarray[imagenum].pixels[index + 1], imgarray[imagenum].pixels[index + 2]);
        strokeWeight(0);
        rect(wheelcounter, y*vScale + ((.5 *width) + 200) ,vScale, vScale);
    for (var x = 0; x<imgarray[0].width; x++){
      var index = (x + y *imgarray[0].width)*4;
    }}

        if (wheelcounter < width){
            wheelcounter = wheelcounter 
        }
            
        if(wheelcounter >= width){
                    wheelcounter = 0
    
      }
}


  function mouseWheel(event) {


    speedcounter = speedcounter + 1

        
        
  
      

    if (wheelcounter % 5 == 0) {
    image(imgarray[imagenum],0,100,width,.5*width)
    imgarray[imagenum].loadPixels();
    pixelpaint(imgarray);
    if (imagenum < imagetotal){
        imagenum = imagenum + 1
     }
 
     if (imagenum == imagetotal){
         imagenum = 0
         }
    

         
  } 

  if (wheelcounter % 2 == 1) {

  }
  wheelcounter= wheelcounter + 1
  start = start + 1
  

}
 

function timeIt() {
    if (start == 0){
        return
    }

    if (start > 0)
    pixelpaint(imgarray);
}

// function mousePressed(){
//     saveCanvas('myCanvas', 'jpg');
// }

function draw(){


    if (frameCount % 60 == 0){
        speedcounter = 0
        }
    
}

