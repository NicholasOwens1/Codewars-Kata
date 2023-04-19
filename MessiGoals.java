
// TODO Messi is a soccer player with goals in three leagues: LaLiga, Copa del Rey, Champions
// TODO Complete the function to return his total number of goals in all three leagues.
// TODO Note: the input will always be valid.
// TODO For example:
// TODO 5, 10, 2  -->  17


public class MessiGoals {
    public static int MessiGoals(int laLigaGoals, int copaDelReyGoals, int championsLeagueGoals) {
       return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    }

    public static void main(String[] args) {
        System.out.println(MessiGoals(43,10,5));
    }
}

// Create a method that adds all 3 arguments together and returns the sum.

