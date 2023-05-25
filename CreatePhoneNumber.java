// TODO: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// TODO:       Example
// TODO:       Kata.createPhoneNumber(new int[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 0}) // => returns "(123) 456-7890"
// TODO:       The returned format must be correct in order to complete this challenge.
// TODO:       Don't forget the space after the closing parentheses!








public class CreatePhoneNumber {
    public static String createPhoneNumber(int[] numbers) {
/// Make a string that starts with "("
//        Loop through the array and add each number to the string
//        If the index is 3, add a ")" to the string
//        If the index is 6, add a "-" to the string
//        Return the string
            String phoneNumber = "(";
            for (int i = 0; i < numbers.length; i++) {
                if (i == 3) {
                    phoneNumber += ") ";
                } else if (i == 6) {
                    phoneNumber += "-";
                }
                phoneNumber += numbers[i];
            } return phoneNumber;
        }
    }