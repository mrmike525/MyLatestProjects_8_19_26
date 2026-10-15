const regexArrayUniform = [
    "bob.123@gmail.com",
    "alice-personal@yahoo.in",
    "admin@cloud.guru",
    "tom_business@amazon.ca",
    "george@yahoo",
    "robert_at_gmail.com",
    "steve austin@gmail.com"
]

// for (const items of regexArrayUniform) {
//     const result = items.replace(
//         /([a-z]{3, 5}\.?-?)[0-9]+[a-z]+@?/,
//         "$1"
//     )
//     console.log("Solution 24 :", result);
// }

const regexArray = [
    "foofoofoofoo",
    "foo",
    "mfoo",
    "coo",
    "doo",
    "poo",
    "loo",
    "boo",
    "hoo1",
    1
]
for (const items of regexArray) {
    if (/fo./.test(items)){
        console.log("Solution 1:",items)
    }
};

const regexArrayAlpha = [
    "Alpha",
    "Beta",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Gulf",
    "Hotel",
    "India",
    1,
    2,
    3,
    4,
    5,
    10,
    12,
    69,
    5158
]

for (const items of regexArrayAlpha) {
    if (/^..*$/.test(items)){
        console.log("Solution 2:",items)
    }
};
console.log(regexArrayAlpha)
for (const items2 of regexArrayAlpha) {
    console.log(items2)
    result = String(items2).replace(
        /69/,
        96
    )
    console.log(result)
}


// const newValue = ()=>regexArrayAlpha.replace(
//     "/69/",
//     "96"
// );
// console.log(newValue())
// for (const items of regexArrayAlpha) {
//     const result = items.replace(
//         /([0-9]+)x([0-9]+)/,
//         "$1 pix by $2 pix"
//     )
//         console.log("Solution 18 :", result)
// }


// regex notes . = any character including space between them (wildcard), 
// * =  0 or more of the characters preceding the star, 
// [] character class container, 
// ^ negates the character class [j-m]: value range in askii value order
// ^$*.[]()\ these characters should be escaped with with a backslash 
// if top of slash leans to right it is a forward slash;
// if top of slash leans to left it is a backslash;
//   "\" backslash;
//  "/" forward slash
// . inside class container intreprets the period as a literal period instead of a wildcard so there is no need to escape, however there are some symbols that have special meaning inside class containers.. so they will need to be escaped inside class containers
// ^ is a placeholder that signifies beginning of a line. the interpretation of ^ differs within square brackets and outside of it. Inside square brackets [], ^ stand for negation, Outside, it is a placeholder for beginning of line.
// $ is a placeholder that signifies the end of a line **put $ at the end!



// ---------The extended set vs (the upper regular set)-----
//  + One or more occurrences of the character that precedes this + symbol
// ? Zero or one occurence of the character that precedes this question mark
// pat1|pat2 Matches either the pattern pat1 or the pattern pat2
// () divides patterns into groups
// {m} Exactly 'm' occurences of whatever precedes
// {m,n} Atleast m and at most n occurences of whatever precedes Only one of m, n is mandatory. Other can be left blank.
// parenthesis () are used as a way to treat as a single entity
// a+ (plus means One or more occcurences of 'a'(The character just preceding the plus symbol))
// a? 

// chatgpt notes.. that "clarifies my notes"
// .  = any single character, except line breaks by default
// *  = zero or more of the previous token
// +  = one or more of the previous token
// [] = character class: match one character from this set
// [j-m] = character range
// [^mh] = anything except m or h
// ^  = start of string; inside [] at the beginning, means negation
// $  = end of string
// \  = escape character in regex
// /  = wraps a regex literal in JavaScript
// \. = literal period
// \\ = literal backslash
// . inside [] is already literal
// ? means true or false to the character preceding it
// | means or... example (fish|taco) means catch fish or taco i think this needs to be in parenthesis
// regex - group capture, find and replace
// steps 1. what needs to be replaced? 2. What should be the replacement?
// steps 2. represent the patterns using regex. enclose the patterns that need to be replaced with parenthesis to segregate them into capture groups
// set 3. come up with a substitution string by using captured pattern groups
// step 4. use a regex enabled find and replace engine to do the replacement