# Decoder-Ring
-This is a capstone submission for my course at thinkful.
-The project demonstrates the utility of JavaScript and how it can be used to make fun projects.

-Screenshots located at ( Decoder-Ring/src/imgs/dcRg-Imgs/ )
-Working version location-( https://blazemarshall.github.io/Decoder-Ring/ )

-The user can create coded messages and decode them using three different techniques.
  -The Caesar Shift
    -Takes the alphabet and shifts it over a numerical amount and codes a message in the new position.
    -Example- 
    ------------------------------------
    +1 shift   a = b      dog = eph
       abcdefghijklmnopqrstuvwxyz
       |  |  |       |               
       bcdefghijklmnopqrstuvwxyza
  ---------------------------------------     
    +3 shift  a = d     dog = gsj
     abcdefghijklmnopqrstuvwxyz
     |  |  |        |                
     defghijklmnopqrstuvwxyzabc
   ------------------------------------
   -2 shift a = y      dog = bme
     abcdefghijklmnopqrstuvwxyz
     |  |  |       |                    
     yzabcdefghijklmnopqrstuvwx                               
       
       
       
---------------------------------------------------------------------------------------------------------
  -The Polybius Square
    - Allows users to create coded messages based on the old technique of the Polybius Square.
    
    -An alphabet is placed into a 5x5 grid. Each letter has a position and the position is the code.
         a=11, b=21, o=43, I/J=42
    -There are 26 letters in the English alphabet so two letter have to share a square. Typically it's
        I and j that share the square since they are easily distinguished from each other when the code is 
        translated.
        Big = Bi/jG = 21,42,22;
        Giant = 2242113344
        Jitter = i/j,i/j,t,t,e,r = 424244445124
  
     
       | 1 | 2 | 3 | 4 | 5 |   
     1 | a | b | c | d | e |   
     2 | f | g | h |i/j| k |   
     3 | l | m | n | o | p |   
     4 | q | r | s | t | u |   
     5 | v | w | x | y | z |   
 
-------------------------------------------------------------------------------------------------------------         
  -The Substitution Cipher
    -Allows the user to substitute the alphabet with an alphabet of their choice.
    -An example of a new alphabet could be simply switching the order of the letters.
        You could take the English alphabet from A to Z and reverse the order from Z to A.
        The alphabet could be anything from symbols to greek letters.
          a=z  dog = wlt
        abcdefghijklmnopqrstuvwxyz
        |  |  |       |                
        zyxwvutsrqponmlkjihgfedcba
        
        alphabet in random order
        a=n   dog = xge
        abcdefghijklmnopqrstuvwxyz
        |  |  |       |                 
        nopxymeqdalvwfgbchijkrstuz
        
        
        
        
        
        
        
