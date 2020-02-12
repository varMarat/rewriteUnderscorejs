// each([1, 2, 3], alert);
// => alerts each number in turn...
// _.each({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn...



function each (obj, func){

    if(obj.constructor.name==='Array'){
        for(let i =0; i<=obj.length; i++){
            func(i)
        }
    }
    if(obj.constructor.name === 'Object'){
        for(key in obj){
            func(obj[key])
         }
    }
}


each([1,2,3,4], alert)
each({one: 1, two: 'b', three: 3}, alert)