const removeVowels = require("./remove-vowels")

test('remove vowels from word', function () {

    // Arrange
    const word = "samuel";
    const expection = "sml";
    // Act
    const result = removeVowels(word);
    // Assert
    expect(result).toEqual(expection)
})