// Trie datastructure has different names like prefix , digital search , retrieval tree
// it used in a situation where we have lot of words and we have to return a particualar word example dictionary
// prefix - > starting of a word like in words "apple" and "app" the coommon prefix is "app" which is common in both words
// words = ["the" , "a" , "there" , "their" , "any"]
// to form a trie dataStructure from those array of words nothing but we construct a tree
// in trees there will be maximum of 2 childs in binary tree , but a tree which can have k number of childs and those childs again can have k number of childs each such trees are called K-Array trees.
// Trie is a K-Array tree
// In BST, the search time complixity is O(n) when it is a left or rigth skewed tree , in AVl trees the search time complixity is O(log n), but the search time complexity in a Trie is O(m) where 𝑚 is the length of the string, regardless of how many words are stored in the Trie.

// Construction of Trie tree
// The root node of Trie is empty
// Prefix is not repeated


class TrieNode{
    constructor(){
        this.referenceArr = new Array(26).fill(null);
        this.isEnded = false;
    }
}



class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let triePointer = this.root;
        for(let i = 0; i < word.length; i++){
            let newTrienode = new TrieNode();
            if(triePointer.referenceArr[word.charCodeAt(i) - 97] === null){
                triePointer.referenceArr[word.charCodeAt(i) - 97] = newTrienode;
                triePointer = newTrienode;
            }
            else{
                triePointer = triePointer.referenceArr[word.charCodeAt(i) - 97];
            }
        }
        triePointer.isEnded = true;
    }

    search(word){
        let triePointer = this.root;
        for(let i = 0; i < word.length; i++){
            if(triePointer.referenceArr[word.charCodeAt(i) - 97] === null){
                return false;
            }
            triePointer = triePointer.referenceArr[word.charCodeAt(i) - 97];
        }

        return triePointer.isEnded;
    }

    startsWith(word){
        let triePointer = this.root;
        if(triePointer.referenceArr[word.charCodeAt(0)]){
            return true;
        }
        return false;
    }
}


let t = new Trie();

let words = ["apple" , "apps" , "apxl" , "bac" , "bat"];

words.forEach((word)=>{
    t.insert(word)
})

console.log(t.search("apple"))
console.log(t.startsWith("apple"))