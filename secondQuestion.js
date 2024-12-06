function longestSubstringWithMaxTwoRepeats(s) {
    let maxSubstring = ""; 
    let maxLength = 0; 
    let charCount = {}; 
    let start = 0; 

    for (let end = 0; end < s.length; end++) {
        // Adding the current character in to charCount map
        charCount[s[end]] = (charCount[s[end]] || 0) + 1;

        // Check if there will any char repeat
        while (Object.values(charCount).some(count => count > 2)) {
            // Reduce the count of the start character
            charCount[s[start]]--;
            if (charCount[s[start]] === 0) {
                delete charCount[s[start]];
            }
            start++; 
        }
        const currentLength = end - start + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxSubstring = s.substring(start, end + 1);
        }
    }

    return { maxSubstring, maxLength };
}

//inputs
console.log(longestSubstringWithMaxTwoRepeats("aaabbccddeef")); 
console.log(longestSubstringWithMaxTwoRepeats("abcabcabc")); 
console.log(longestSubstringWithMaxTwoRepeats("aabbaa")); 
