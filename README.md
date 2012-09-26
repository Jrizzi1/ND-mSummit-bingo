## Notre Dame Mobile Summit 2012 Bingo Game
Objective was to create a mobile bingo gamefor the ND mobile summit 2012. I decided using HTML5 and javascript without use of server-side coding
the best route to take. 

The app checks for a parameter, and if one does not exist redirects to login
If parameter (user id) exists , a bingo board is generated from a randomizer function, and board clicks are locally stored in HTML5 db so that button clicks can be remembered
```JS
localStorage.setItem(squareStorageKey, $(this).data('value'));
```
I will say this is mostly custom code, i got my starting place from Jeff Hobbs bingo <https://github.com/jeffehobbs/HTML5-bingo/>

I utilize jquery.tappable.js <http://aanandprasad.com/articles/jquery-tappable/> for the board touch events,
and jQuery mobile was used for some styling, but is pretty much not needed and will be deprecated at some point and time

*I did not have access to an Android phone, i need to have the styling media queries updated for said devices

I hope you enjoyed, Thanks

