import { fillObj } from "./occurrences.js";
import { getResArray } from "./occurrences.js";
export function isAnagram(string, anagram) {
    let flag = true;
    const sresObj ={};
    const aresObj = {};
    fillObj([...anagram],aresObj);
    fillObj([...string],sresObj);
    const resAnagram = getResArray(aresObj);
    const resString = getResArray(sresObj);

    flag=resString.reduce(
        (acc, cur) =>          
        (resAnagram.includes(cur)? acc=acc:acc=false),true);   
         
    return flag;
}
