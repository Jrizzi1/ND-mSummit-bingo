## Notre Dame Mobile Summit Bingo - 2013 update
Hi, thanks for playing ND Mobile Summit Bingo! this years release was a massive overhaul from last years version.
####Design
The Main focus on making the entire game as a Responsive Website, utilizing EM based media queries ( for good reading see  [The EMs have it: Proportional Media Queries FTW!](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/ "Title") )

P.S. it is very difficult to maintain a square grid responsively , I about broke down in tears.

The other major improvement is implementing  an Off-Canvas menu, transitioned by CSS 3D transforms, which are applied by [Modernizr](http://modernizr.com, "Title") classes. 
It definately provides a much more native feel than last year's implementation of jQuery Mobile (which i removed entirely)

####Magnific popup
To replace jQuery Mobile Dialogs/pages (as that framework was removed) I implemented [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/, "Title"), a responsive jQuery lightbox plugin

####Text Messages
Modernizer User agent tests were written to attempt to prepopulate a message using different sms uri schemes based on either iOS or Android devices, but I assume this is unreliable and may give issue (but it is cool!)

####Twitter
Due to the 1.1 API change , i also removed from last years version some Twitter integrations. I wanted the app to stay entirely HTML5/js and avoid server-side scripting. It Seems much easier to send users directly to Twitter rather than posting by proxy OAuth authentication.

Thanks again for playing!

- Jay Rizzi

## end of 2013 Update notes


### Notre Dame Mobile Summit Original 2012 Bingo Game 
Objective was to create a mobile bingo gamefor the ND mobile summit 2012. 
I decided using HTML5 and javascript without use of server-side coding so that it could be deployed anywhere and quickly

The app checks for a parameter, and if one does not exist redirects to login
If parameter (user id) exists , a bingo board is generated from a randomizer function, and board clicks are locally stored in HTML5 db so that button clicks can be remembered
```JS
localStorage.setItem(squareStorageKey, $(this).data('value'));
```
I will say this is mostly custom code, i got my starting place from Jeff Hobbs bingo <https://github.com/jeffehobbs/HTML5-bingo/>

I utilize jquery.tappable.js <http://aanandprasad.com/articles/jquery-tappable/> for the board touch events,
and jQuery Mobile was used for graded browser support

*I did note HTC Evo 4 was not displaying correctly, my apologies i had limited access to devices other than IOS

I hope you enjoyed, Thanks
