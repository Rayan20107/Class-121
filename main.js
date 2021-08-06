function setup() 
{
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  initialize=ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded()
{
  console.log("Model Loaded");
}

function preload()
{

}

function draw()
{
  image(video, 0, 0, 300, 300);
  initialize.classify(video, gotResults);
}

function gotResults(error, results)
{
   if (error) {
     console.log(error);
   }

   else{
     document.getElementById("object-name").innerHTML=results[0].label;
     document.getElementById("object-accuracy").innerHTML=results[0].confidence.toFixed(3);
    console.log(results)
   }
}