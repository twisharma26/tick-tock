var hr, min, sec, hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  

  translate(200, 200) //to give this as the default x and y, changes with movement of objects

  rotate(-90) //starts the circle ring things properly 

  //predefined functions
  hr = hour() 
  min = minute() 
  sec = second() 

  //to change the time to degrees
  hrAngle = map(hr%12, 0, 12, 0, 360) //map(current hour%12 for the remainder, index from where it has to start, the max value, the min value for degrees, max value for degrees) like min hour:max hour :: min degrees:max degrees
  minAngle = map(min, 0, 60, 0, 360)
  secAngle = map(sec, 0, 60, 0, 360)

  //seconds
  push()
  rotate(secAngle)
  stroke(255, 0, 0)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()

  //minutes
  push()
  rotate(minAngle)
  stroke(0, 255, 0)
  strokeWeight(7)
  line(0, 0, 75, 0)
  pop()

  //hours
  push()
  rotate(hrAngle)
  stroke(0, 0, 255)
  strokeWeight(7)
  line(0, 0, 50, 0)
  pop()

  strokeWeight(10)
  noFill()
  stroke(255, 0, 0)
  arc(0, 0, 315, 315, 0, secAngle)

  stroke(0, 255, 0)
  arc(0, 0, 280, 280, 0, minAngle)

  stroke(0, 0, 255)
  arc(0, 0, 245, 245, 0, hrAngle)
}