let str1 = "Helleo";
let str2 = "llo";


function checkSubString(s1 , s2){
  for(let i = 0; i <= s1.length - s2.length; i++){
    let result = true;
    for(let j = 0; j < s2.length; j++){
       if(s1[j+i] !== s2[j]){
        result = false;
        break;
       }
    }
    if(result){
        return true;
    }
  }
  return false;
}
function runTests() {
  const testCases = [  
    { str1: "Helleo", str2: "llo", expected: false },
    { str1: "Helleo", str2: "He", expected: true },
    { str1: "Helleo", str2: "o", expected: true },
    { str1: "Helleo", str2: "ell", expected: true },
    { str1: "Helleo", str2: "Hello", expected: false },
    { str1: "Helleo", str2: "eoo", expected: false },
    { str1: "Helleo", str2: "x", expected: false },
    { str1: "", str2: "", expected: true },          // Empty string as both str1 and str2
    { str1: "Helleo", str2: "", expected: true },    // Empty string as str2
    { str1: "", str2: "Hello", expected: false },    // Empty string as str1
    { str1: "aaa", str2: "aaaa", expected: false },  // str2 longer than str1
  ];

  testCases.forEach((testCase, index) => {
    const { str1, str2, expected } = testCase;
    const result = checkSubString(str1, str2);
    const passed = result === expected;
    console.log(`Test Case ${index + 1}: ${passed ? "PASSED" : "FAILED"}`);
    if (!passed) {
      console.log(`  Input: str1 = "${str1}", str2 = "${str2}"`);
      console.log(`  Expected: ${expected}, but got: ${result}`);
    }
  });
}

runTests();