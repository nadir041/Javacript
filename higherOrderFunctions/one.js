const radius =  [3, 2, 1, 4];

const area = function (radius){
    return Math.PI * radius * radius;
};

const circumference = function (radius){
    return 2 * Math.PI *  radius;
};

const diameter =  function (radius){
    return 2 * radius;
}

const calculateArea =  function (radius, logic){
    output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculateArea(radius, area));
console.log(calculateArea(radius, circumference));
console.log(calculateArea(radius, diameter));
