import { fillObj } from "./occurrences.js";
import { getResArray } from "./occurrences.js";
export function isAnagram(string, anagram) {
        let res=false;
    
        const stringArray =string.split('');
        const anagramArray = anagram.split('');
           
        (stringArray.length!=anagramArray.length)?res=false:
      
         res=stringArray.every((str)=>
        (anagramArray.indexOf(str)>-1)?
        (anagramArray.splice((anagramArray.indexOf(str)),1)):str=str);
    
        (anagramArray.length!=0)?res=false:res=true;    
        
        return res;
        };
    