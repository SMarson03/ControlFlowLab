/*Your task is to create a program that advises a group of environmental 
scientists how to handle the growth and spread of a unique plant species under 
their supervision. You must develop a growth control system that will monitor 
and predict the plant growth, making decisions based on the available space and 
potential growth. Here is the information you have been given:
The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, 
squared: const PI = 3.1415; const area = PI * radius * radius*/

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius
console.log(area)

//Each plant requires a minimum space of 0.8 square meters

const minSpace = .8;
const plant = 20;

//The area is starting with 20 plants
const perPlant = minSpace/ plant
console.log(perPlant)

//The plants double in number every week

const growthWeek1 = 20
const growthWeek2 = growthWeek1*2 
const growthWeek3 = growthWeek2*2
console.log(growthWeek1)
console.log(growthWeek2)
console.log(growthWeek3)

//implement control flow to make decisions on whether the plants should be:
//Pruned, to stop them from exceeding the capacity of the garden.
//This condition should be met if the plant count after the given number of 
//weeks is greater than 80% of the maximum capacity of the garden.