// let title = "main title";
// let tagline = "main tagline";
// let keyword = "keyword1,keyword2,keyword3";
// let coverImage = "coverImage";
// let contents = [
//     { paragraphs: ["main paragraph"] },
//     { paragraphs: ["paragraph1"], heading: "heading1" },
//     { paragraphs: ["paragraph2"], heading: "heading2" },
// ];

/**
 * @param { accept data in this format}
 */

// arrangeDataFromSavingInDB(title, tagline, keyword, coverImage, [
//     { paragraphs: [paragraph] },
//     { paragraphs: [paragraph1], heading: heading1 },
//     { heading: heading2, paragraphs: [paragraph2] },
//   ])


export const arrangeDataFromSavingInDB = (frontEndData) => {

    console.log(frontEndData);
    const { title, tagline, keywords, coverImage, mainParagraph, paragraph1, paragraph2, heading1, heading2 } = frontEndData;
    let contents = [
        { paragraphs: [mainParagraph] },
        { paragraphs: [paragraph1], heading: heading1 },
        { paragraphs: [paragraph2], heading: heading2 },
    ];

    let keywordCheck = [];
    if (!keywords?.includes(",")) {
        keywordCheck = [keywords];
    } else {
        // Split the string with a comma and trim each keyword
        keywordCheck = keywords?.split(",").map((word) => word.trim());
        // console.log(keywordCheck);
    }

    // Update the updatedData object with the new values
    return {
        // ...prevBlogPost,
        title: title,
        tagline: tagline,
        keyword: keywordCheck,
        coverImage: coverImage,
        contents: contents.map((content) => {
            const newContent = {};

            // Check if heading exists and is a non-empty string
            if (content.heading && typeof content.heading === "string") {
                newContent.heading = content.heading;
            } else {
                newContent.heading = ""; // Default value if heading is not present or not a string
            }

            // Check if paragraphs is an array with at least one element
            if (
                Array.isArray(content.paragraphs) &&
                content.paragraphs.length > 0
            ) {
                newContent.paragraphs = content.paragraphs;
            } else {
                newContent.paragraphs = []; // Default value if paragraphs is not an array or is empty
            }

            return newContent;
        }),
    };

    // Optional: Log the updated blogPost state to see the changes
    console.log(blogPost);
};



// const arrangeDataFromSavingInDB = (
//     title,
//     tagline,
//     keywords,
//     coverImage,
//     contents
// ) => {

//     let keywordCheck = [];
//     if (!keywords?.includes(",")) {
//         keywordCheck = [keywords];
//     } else {
//         // Split the string with a comma and trim each keyword
//         keywordCheck = keywords?.split(",").map((word) => word.trim());
//         // console.log(keywordCheck);
//     }

//     // Update the updatedData object with the new values
//     return {
//         // ...prevBlogPost,
//         title: title,
//         tagline: tagline,
//         keyword: keywordCheck,
//         coverImage: coverImage,
//         contents: contents.map((content) => {
//             const newContent = {};

//             // Check if heading exists and is a non-empty string
//             if (content.heading && typeof content.heading === "string") {
//                 newContent.heading = content.heading;
//             } else {
//                 newContent.heading = ""; // Default value if heading is not present or not a string
//             }

//             // Check if paragraphs is an array with at least one element
//             if (
//                 Array.isArray(content.paragraphs) &&
//                 content.paragraphs.length > 0
//             ) {
//                 newContent.paragraphs = content.paragraphs;
//             } else {
//                 newContent.paragraphs = []; // Default value if paragraphs is not an array or is empty
//             }

//             return newContent;
//         }),
//     };

//     // Optional: Log the updated blogPost state to see the changes
//     console.log(blogPost);
// };


/**
 * @param { just for testing}
 */

// const returnData = arrangeDataFromSavingInDB(title, tagline, keyword, coverImage, contents)
// console.log(returnData);


