// export const updatedData = {
//     title: "",
//     tagline: "",
//     coverImage: "",
//     keyword: [],
//     contents: [],
// };

// export function utilsHandleSubmit(updatedData, title, tagline, keyword, contents) {
//     // Update the updatedData object with the new values
//     updatedData.title = title;
//     updatedData.tagline = tagline;
//     updatedData.keyword = keyword;

//     // Iterate through each content item
//     updatedData.contents = contents.map((content) => {
//         const newContent = {};

//         // Check if heading exists and is a non-empty string
//         if (content.heading && typeof content.heading === "string") {
//             newContent.heading = content.heading;
//         } else {
//             newContent.heading = ""; // Default value if heading is not present or not a string
//         }

//         // Check if paragraphs is an array with at least one element
//         if (Array.isArray(content.paragraphs) && content.paragraphs.length > 0) {
//             newContent.paragraphs = content.paragraphs;
//         } else {
//             newContent.paragraphs = []; // Default value if paragraphs is not an array or is empty
//         }

//         return newContent;
//     });

//     // Optional: Log the updatedData object to see the changes
//     console.log(updatedData);
// }

let keywords = "hello        this is khan "
let keywordCheck = []
if (!keywords?.includes(",")) {
    keywordCheck = [keywords];
} else {
    // Split the string with a comma and trim each keyword
    keywordCheck = keywords?.split(",").map(word => word.trim());
}

console.log(keywordCheck);

// split(',').map(keyword => keyword.trim())