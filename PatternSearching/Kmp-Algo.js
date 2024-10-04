// In normal Navie approach the pattern is started from the beginning when a mismatch occurs, which is inEfficent
// KMP algorithm solves that problem
// In this we find the common longest prefix that is also a suffix
// We also create a LPS(longest prefix , suffix)

class KMP {
    constructLpsArr(lps, pat) {
        let i = 1;
        let j = 0;
        lps[0] = 0;
        while (i < lps.length) {
            if (pat[i] === pat[j]) {
                j++;
                lps[i] = j;
                i++;
            } else {
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
    }

    searchPattern(text, pattern) {
        let lps = new Array(pattern.length).fill(0);
        this.constructLpsArr(lps , pattern)
        let i = 0;
        let j = 0;
        while (i < text.length) {
            if (text[i] === pattern[j]) {
                i++;
                j++;
            }

            else{
                if(j != 0)
                    j = lps[j-1]   
                else
                    i++;
            }
            if (j === pattern.length) {
                return true; // Pattern found
            }

        }
        return false; // Pattern not found
    }
}

let kmp = new KMP();
console.log(kmp.searchPattern("onionionspl" , "onions"))

