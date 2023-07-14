
/*
Imagine we are building a computer game in which a player must avoid running into monsters. Our first step is to determine the location of the player on the game board.

Write a function that takes a board, and returns the index of the player.

Board constraints:
 - The board is a list of characters
 - An empty space on the board is denoted by a dash: '-'
 - The player is denoted by the letter 'P'

Sample input and output:
board1 = ['-', '-', 'P', '-', '-', '-'] => 2
board2 = ['P', '-', '-'] => 0
board3 = ['-', '-', '-', 'P'] => 3
board4 = ['P'] => 0

For this question, you cannot call built-in search functions like index() or indexOf().

Complexity Analysis variable:
n = number of spaces in the board
*/

public class PlayerPosition {
    static int playerPosition(char[] board) {

        for (int i = 0; i <= board.length - 1; i++) {
            if (board[i] == 'P') {
                // System.out.println(board[i]);
                return i;
            }
        }
        return -1;
    }


    public static void main(char[] argv) {
        char[] board1 = {'-', '-', 'P'};
        System.out.println(playerPosition(board1)); // returns 2

        char[] board2 = {'P', '-', '-'};
        System.out.println(playerPosition(board2)); // returns 0

        char[] board3 = {'-', '-', '-', 'P'};
        System.out.println(playerPosition(board3)); // returns 3

        char[] board4 = {'P'};
        System.out.println(playerPosition(board4)); // returns 0
    }
}
