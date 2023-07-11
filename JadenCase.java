public class JadenCase {

    public String toJadenCase(String phrase) {
//     Create an array of strings
        String[] arr;
// if the argument is not null, split it by each space. Otherwise, return null.
        if (phrase != null) {
            arr = phrase.split(" "); // Initialize the array inside the if statement
        } else {
            return null;
        }
//      Declare StringBuffer class. If the argument is an empty string, return null
        StringBuffer sb = new StringBuffer();
        if (phrase.equals("")) {
            return null;
        }
        else {
//           Loop through the array of Strings.
            for (int i = 0; i < arr.length; i++) {
//               Convert the first character of the nth word in the array to uppercase
                sb.append(Character.toUpperCase(arr[i].charAt(0)))
//                   Append the rest of the characters of the array to the StringBuffer
//                   with a space after
                        .append(arr[i].substring(1)).append(" ");
            }
            return sb.toString().trim();
        }
    }
}