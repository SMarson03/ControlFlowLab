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

const plantSpace = .8;
const plant = 20;
const maxCapacity = area / plantSpace;
console.log(maxCapacity)

//The plants double in number every week
function Growth (weeks){
    const plantCount = plant * Math.pow(2, weeks);
    if (plantCount > maxCapacity *.8){
        console.log(`Week ${weeks}: Prune the plants. Too many plants!`);
        }

        else if(
            plantCount >= maxCapacity * .5 &&
            plantCount <= maxCapacity * .8
        ){
            console.log(`Week ${weeks}: Monitor the plants. They are within limits.`            );
        }
    else {
        console.log(`Week ${weeks}: Plant more. There is room.`);
    }
}
 Growth(1)
 Growth(2)
 Growth(3)

//The area is starting with 20 plants

//implement control flow to make decisions on whether the plants should be:
//Pruned, to stop them from exceeding the capacity of the garden.
//This condition should be met if the plant count after the given number of 
//weeks is greater than 80% of the maximum capacity of the garden

//Planted, if there is room to plant more plants. This condition should be met 
//if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
function Growth (weeks){
    const plantCount = plant * Math.pow(2, weeks);
    if (plantCount > maxCapacity *.5){
        console.log(`Week ${weeks}: No more!`);
        }else if(
            plantCount >= maxCapacity * .5 &&
            plantCount <= maxCapacity * .5
        ){
            console.log(`Week ${weeks}: Monitor the plants. They are within limits.`            );
        }
    else {
        console.log(`Week ${weeks}: Plant more. There is room.`);
    }
}
 Growth(1)
 Growth(2)
 Growth(3)