let myName = "Spencer Wood";
let capitalName = "Name:" + myName.toUpperCase();
let careerField = "Career:" + " Hopeful Junior Programmer";
let selfDescription = "Description:" + "I liketuh make money, get turnt."
console.log("\n")


const myInterests = ['exercise', 'outdoor activities', 'reading', 'wikipedia rabbit holes',
];
let pastPostions = [{
    Company: 'US Forest Service',
    Title: 'Wildland Firefighter',
    PositionDescription: 'served as a firefighter during prescribed burning and fire suppression activites.',
},
{
    Company: 'US Navy',
    Title: 'Hospital Corpsman',
    PositionDescription: 'assisted in the prevention and treatment of disease and injury and assisted health care professionals in providing medical care to Navy and Marine Corps personnel. ',


},
];

let skills = [
    {
        skill: 'nunchaku',
        cool: false,
    },
    {
        skill: 'bo staff',
        cool: false,

    },
    {
        skill: 'chainsaw',
        cool: true,
    },
    {
        skill: 'sacking hackies',
        cool: false,
    },



]



//This function when call will take every element in the array and print to the console.
function displayPostion(companyName, jobTitle, positionDescription) {
    ;
    console.log("* " + jobTitle + " at " + companyName + ", where I " + positionDescription)
}
//used this function to take the skill in the object and test if it is 'cool' or not. truthy falsey.
function displaySkill(skill, isCool) {
    if (isCool === true) {
        console.log("*BAM: " + skill);
    } else {
        console.log("* " + skill)
    }
};
console.log(capitalName)
console.log(careerField)
console.log(selfDescription)
console.log("\n")
console.log("My Interests:");
//used to a for loop to look through each item in the interest array and print to console.
for (let i = 0; i < myInterests.length; i++) {
    const element = myInterests[i];
    console.log('*' + element)

};
console.log('\n')
console.log("My Past Positions:");
displayPostion(pastPostions[0].Company, pastPostions[0].Title, pastPostions[0].PositionDescription);
displayPostion(pastPostions[1].Company, pastPostions[1].Title, pastPostions[1].PositionDescription);
console.log("\n");
console.log("My Skills:");
//used a foreach element for practice. it took each skill and element is a placeholder. ran the function to test for each item in the object.
skills.forEach(function (element) {
    displaySkill(element.skill, element.cool)

});








