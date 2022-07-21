export const parseToJson = (text) => {
    console.log("text to parse JSON: ", text);
    try {
        return JSON.parse(text);
    } catch (err) {
        return null;
    }
}