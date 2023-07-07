let str = "ABCDEF"
let count = 0;
const arr = [];
let permutations = (str,result) => {
    if(str.length == 0){
        count += 1;
        arr.push(result);
        // console.log(result,count,arr);
    }
    for(let i=0;i<str.length;i++)
    {
        let rest = str.substring(0,i) + str.substring(i+1);
        permutations(rest,result+str[i])
    }
}

permutations(str,'');



const generateNumber = () => {
let select = (Math.random())*719;
select = Math.floor(select);
// console.log(select);
return select;
}



let num = generateNumber();
const groups = [];
groups.push(arr[num]);


const noTermCommon = (generateStr) => {
 
for(let t=0;t<groups.length;t++){
    let countLen = 0;
    for(let u = 0; u<str.length;u++)
    {
        if(arr[generateStr][u] != groups[t][u]){countLen++;}
    }
    
    if(groups.length<str.length){
        if(countLen != str.length){
        return false;
    }}
    if(groups.length>=str.length && groups.length<(str.length+2)){
        if(countLen < (str.length-1)){
        return false;
    }
    }
    if(groups.length>=(str.length+2)){
        if(countLen < (str.length-2)){
        return false;
    }
    }
    
}
return true;
}

const createGroup = () => {
    const NoGenerated = generateNumber();
   
    if(noTermCommon(NoGenerated)){
        groups.push(arr[NoGenerated]);
        console.log(groups);
    }
    else {
        createGroup();
    }

}
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();
createGroup();











module.exports = groups


