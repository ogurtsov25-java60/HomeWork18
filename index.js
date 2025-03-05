import { testframework } from "./testframework.js";
testframework('occurrences function test','const strings = ["b","a", "c", "b", "b", "c"]',
   ["occurrences(strings)"], [["a=>1", "b=>3", "c=>2"]])
   testframework('isAnagram testing','const string = "hello"',
    ['isAnagram(string, "olteh")', 'isAnagram(string, "lehol")',
      'isAnagram(string, "ollle")', 'isAnagram(string, "hell")',
      'isAnagram(string, "oelhlt")'
    ], [false, true, false, false, false]
   )