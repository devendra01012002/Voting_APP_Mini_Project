# Voting_APP_Mini_Project
 Mini project 

# functionalities
1) User sign in / sign up
2) See the list of the candidates
3) Vote of the candidte,after voting, user can't vote again
4) there is a route which shows the list of candidates and their live vote counts sorted by their vote count
5) user data must contains their one unique government id proof named : aadhar Card
6) there should be a admin who can only maintain the table of candidates and he can't able to vote all
7) user can change their password
8) User can login only with aadhar card number and password

# Routes
User Authentication:
    /signup:POST -> Create new user account
    /login: POST-> Log in to an existing account.[aadhar card number and password]
    
Admin Candidate Management:
    /candidates:POST-> Create a new candidate.
    /candidates/:candidatesId:PUT-> Update an existing candidate.
    /candidates/:candidates:DELETE-> Delete an existing candidate from the list.

Voting :
    -> /candidates: GET ->get the list of candidates.
    -> /vote/:candidateId: POST->vote for a specific candidate

Vote Counts:
    /vote/counts:GET-> get the list of candidates sorted by the number of votes

User Profile:
    /profile:GET-> Get the user's profile information.
    /profile/password: PUT-> Change the user's password.

