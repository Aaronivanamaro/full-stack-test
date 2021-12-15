# full-stack-test

Though this is in a single repository, it consists of two different apps. Therefore, you will need to install the dependencies independently, as well as run them on different ports. The default for the client is 3000 and for the server 8000.

# Target 
* This readme is mainly written on the occasion of some challenges for Rotunda Software. Therefore, the main target is Rotunda Team, which will better understand the content due to the context in which it takes place.

# Technologies used:
* The client is built with create-react-app and works with some libraries such as react-router-dom, material-ui, axios and hamburger react.
* The server is built in Node.js with the aid of express.js. 

# Main Goal:
* The main focus of this full-stack app is the logic behind some functionalities such as the zoo generator, an error logger, and a url parser. In addition to that, effective communication between the client and server has been prioritized. 

# Bugs:
* This focus on client-server communication and some specific functionalities led to some bugs in the frontend and relatively poor styles, because of the short time I had to develop this application. Two of the challenges (zoo generator with different animals that share speak method, and url parser) were coded successfully. However, the error logger has some particularities. It works pretty well with some values, but if too many errors (let's say 60) occur in a short period of time (let's say 130 seconds) it starts to fail. I feel I've been near but I couldn't create an infallible logger that satisfies the three main conditions (+ 10 errors, -60 seconds, no more than 1 notification per minute). This one is the one I found more challenging. In addition to that, it is possible that requesting the creation of a new zoo with the specified parameters has some frontend bugs. However, the logic behind the methods and classes works pretty well.
### [ ---> Check new branch with some updates on this <--- ] ###

# Use Instructions
* ZOO GENERATOR: You need to execute both the backend server and the frontend client. Once executing, the default page is Home. Go to the navbar and click "ZOO". Then, you'll be redirected to a new form. Type the name of the zoo and then press "NEXT".

Now, complete the new form with data about the animals of the zoo. You may fill this second form as many times as you wish, but I would recommend no less than two. You need to enter name, sex and specie. Once you enter the first animal data, you will have available a new button to go to the next form. However, let me emphasize that you first complete the same form with different data animals at least one more time.

When you click "NEXT" (the one above), you will be redirected to a new form to type a phrase. It can be whatever you want. For instance "Hello, how are you?". Here, there is a bug. So, it's possible that you need to click the button "CREATE ZOO" more than once to create it. This is the last click. Now, info about the animals of the zoo will be displayed.

* URL PARSER: Click on "Url Parser" on the nav menu. Enter in the two input elements, the corresponding data. In the first one (counting from the left), the "url format" (you may enter the suggested one o anyone you wish). In the second one, a "ulr instance". Once, you click "Send", you will see on the screen the hash object.

* ERROR ALARM: I didn't have the time to connect the logger controller. So, the easiest thing, in this case, would be to go to server/utils/errLogger.js. Select everything, copy it, and paste it in any code run of your preference (for instance, code Sandbox). Uncomment the function called "mockError()" and the code will be executed. This function receives two parameters: the number of errors you want to mock and the seconds in which you want them to occur.

# Final Comments
* I want to thank Rotunda for giving me the opportunity to make this challenge. I have enjoyed the process of solving (or trying to solve) the problems and I found satisfactory the advances I could make in its resolution, though a bit sad with the frontend result (since it's sort of my strength and more-trained skill). I hope we will be able to discuss the project and get in contact to get to know better each other.
