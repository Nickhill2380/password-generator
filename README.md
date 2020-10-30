# Password Generator Starter Code

## Description

I was tasked with created a password generator that will allow the user to select the criteria they need to meet and then it will generate a password for them. I used a series of prompt to determine what style of password the user needed. The prompt appear after the generate button is clicked. The first prompt as for a password length which is then used as a value to determine the amount of times the for loop is run in the password function. The next four prompts will ask the user what kind of characters they can use in their password. If the user selects none of them they are informed they must choose one and the prompts start over. Once the prompts are completed the generate password functions goes through the for loop, the number of times determined by the user and selected one character each time from the criteria set by the user. Then can then click the copy password button and be alerted the password has been copied the user can then paste the password, where they need it. 

    Going forward to improve on the functionality of this website. I'm going to look into a way to ensure the for loop selects one of each of the criteria selected. In case the user needs to use them and not just wants to. This would be used to cut out rare case where do to random propability, certain are selected by user but not by the function, causing the user to have to redo go through the prompts to get a password they can use.

## Usage


## Credits

The website was designed for the class. I set up the characterLength, criteriaSet, generatePassword, copyPassword and the copyBtn functions in javascript. I also put the copy button in the html file. However, used the existing tags to keep its style the same as the generate password button.  I used the following webpages to help with my generator.

I used this for idea of how to get the for loop to pull from the criteriaSet

https://stackoverflow.com/questions/1497481/javascript-password-generator

I used this to help get my copy button to work:

https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
