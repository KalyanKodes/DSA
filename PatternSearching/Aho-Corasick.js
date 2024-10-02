
/*
 * Aho-Corasick Algorithm
 * ----------------------
 * The Aho-Corasick algorithm is a powerful string searching algorithm used to find all occurrences
 * of a set of patterns in a given text. It's often used in multiple-pattern search problems, such as 
 * searching for multiple words in a document. It's particularly useful for dictionary-based searches.
 * 
 * Time Complexity: O(n + m + z)
 * Where:
 *  - n is the length of the text.
 *  - m is the total length of all patterns.
 *  - z is the number of occurrences of the patterns in the text.
 * 
 * Space Complexity: O(m * k)
 * Where:
 *  - m is the number of states (nodes in the trie).
 *  - k is the size of the alphabet.
 * 
 * Steps of the Algorithm:
 * 1. **Trie Construction**:
 *    - Build a trie for all the patterns.
 *    - Each node represents a prefix of one or more patterns.
 * 
 * 2. **Failure Links (Failure Function)**:
 *    - Construct failure links (back edges) which indicate the longest proper suffix of the pattern that
 *      is also a prefix.
 *    - If a mismatch happens, we follow the failure link to find another match.
 * 
 * 3. **Text Search**:
 *    - Traverse the text character by character using the trie.
 *    - If a character does not match the current state, follow the failure link to try finding matches.
 *    - If a match is found, all patterns ending at that position are reported.
 * 
 * Usage of the Aho-Corasick Algorithm:
 * - Text editors for search/replace functionality.
 * - Network intrusion detection systems for pattern matching.
 * - Spam filtering and dictionary-based searches.
 * 
 * Key Concepts:
 * - **Trie**: A data structure that efficiently stores a set of strings.
 * - **Failure Links**: They allow skipping unnecessary comparisons by pointing to the next state to check.
 * - **Output Links**: They store the patterns found during the search.
 * 
 * Example Use Case:
 * Suppose we want to search for the words "he", "she", "his", and "hers" in the text "ahishers". 
 * The Aho-Corasick algorithm efficiently finds all occurrences of these words in the text.
 */




class State{
    constructor(){
        this.referenceArr = new Array(26).fill(null);
        this.isEnded = false;
        this.failureLink = null;
        this.words = [];
    }
}


class AutoMeta{
    constructor(){
        this.root = new State();
    }

    insert(word){
        let temp = this.root;
        [...word].forEach((item)=>{
            let index = item.charCodeAt(0) - 97;
            if(temp.referenceArr[index] === null){
                let newState = new State();
                temp.referenceArr[index] = newState;
                temp.words.push(item);
            }
            temp = temp.referenceArr[index];
        });
        temp.isEnded = true;
        temp.words.push(word);
    }

    findProperSufix(string){
        if(string == " " || string.length == 1){
            return [" "];
        }
        let sufixs = [];
        for(let i = 1; i < string.length; i++){
            sufixs.push(string.slice(i));
        }
        sufixs.push(" ");
        return sufixs;
    }

    findPrefixNode(sequence){
        if(sequence === " "){
            return this.root;
        }
        let node = this.root;
        for(let i = 0; i < sequence.length; i++){
            let index = sequence.charCodeAt(i) - 97;
            if(node.referenceArr[index] === null){
                return false;
            }
            node = node.referenceArr[index];
        }
        return node;
    }

    setChildsLink(node , wordSequence){
        if(node.isEnded){
            // console.log(node.words.toString() , "\n")
            return;
        }
        node.words.forEach((item)=>{
            let sequence = wordSequence + item
            let index = item.charCodeAt(0) - 97;
            let $sufix = this.findProperSufix(sequence);
            // console.log(`Proper suffix for sequence:`,sequence , $sufix)
            for(let sfx = 0; sfx < $sufix.length; sfx++){
                let prefixNode = this.findPrefixNode($sufix[sfx]);
                if(prefixNode){
                    // console.log("Found prefix node for suffix" , $sufix[sfx] , prefixNode.words)
                    node.referenceArr[index].failureLink = prefixNode;
                    break;
                }
            }
            this.setChildsLink(node.referenceArr[index] , sequence)
        });
    }

    setFailureLink(){
        this.root.failureLink = this.root;
        this.root.words.forEach((word)=>{
            let index = word.charCodeAt(0) - 97;
            this.root.referenceArr[index].failureLink = this.root;
            this.setChildsLink(this.root.referenceArr[index] , word)
        });
    }


    search(dict) {
    let node = this.root;
    for (let i = 0; i < dict.length; i++) {
        let index = dict.charCodeAt(i) - 97;
        
        // If there's a mismatch, follow failure link
        while (node.referenceArr[index] === null && node !== this.root) {
            node = node.failureLink;
        }

        // Move to the matched node or the root
        if (node.referenceArr[index] !== null) {
            node = node.referenceArr[index];
        } else {
            node = this.root;
        }

        // Traverse failure links to find all patterns that match at this position
        let temp = node;
        while (temp !== this.root) {
            if (temp.isEnded) {
                console.log(temp.words);
            }
            temp = temp.failureLink;
        }
    }
}

}




let sentence = "abcabcabc";
let dictionary = ["abc", "bc", "cabc"];

let trieTree = new AutoMeta();
dictionary.forEach((root) => trieTree.insert(root));
trieTree.setFailureLink();
trieTree.search(sentence);



