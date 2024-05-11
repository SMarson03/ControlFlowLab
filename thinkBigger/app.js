//The conservation area in which the garden is located has multiple other gardens. 
//Using the logic you have already created, determine:
//The amount of additional space that would be required if the scientists were to start with 100 plants, 
//and did not prune them for 10 weeks. If the space remained circular, what would be the radius of this expanded garden?

const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius
console.log(area)

//Each plant requires a minimum space of 0.8 square meters

const plantSpace = .8;
const plant = 100;
const newArea = area * 5
console.log(newArea)

const maxCapacity = newArea/plantSpace

function overGrown(weeks){
    const plantCount = plant * Math.pow(2, weeks);
    if (plantCount > maxCapacity *.8){
        console.log(`Week ${weeks}: Prune the plants. Too many`)
    } else if (
        plantCount >= maxCapacity * .5 &&
        plantCount <= maxCapacity * .8
    ){
        console.log(
            `Week ${weeks}: Monitor the plants. Growing within capacity.`
        );
     } else {
       console.log(`Week ${weeks}: Plant more. Has room.`)
     }
    }
overGrown(1)
overGrown(2)
overGrown(3)
overGrown(4)
overGrown(5)
overGrown(6)
overGrown(7)
overGrown(8)
overGrown(9)
overGrown(10)