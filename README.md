# BrewJudgeRN
React Native implementation of the BrewJudge

The Brew Judge is an application I am developing that will allow users to scan bar/brewery/restaurant menus and pull geolocation specific reviews
for each item on the menu. This will allow for reviews to be on a per product basis rather than a per business basis. The idea is that a great brewery
can still have a bad brew or only be speacialized in a few types of beers. An IPA person will not enjoy a 5 star business that only serves Porters.
But someone who loves Stouts won't care if the business is 2 stars but all their porters are 5/5.

Right now only the the react native application is public, each view is only a test view and no where near production.
The backend is being designed as microservices and are each contained to their docker images. Continuous integration will be configured once I have access
to an additional Mac to run as a jenkins server. Currently I cannot test the iOS portion on any secondary machine. 

Image Data is stored on its own backend, along with responses from the Google Cloud vision API, with the goal to train my own text recognition classifier
to reduce overhead at scale.

Once I'm sure each microservice is secure and doesn't contain any DB/API information, I will make their repositories public as well.
