# LazyShutDown

I am too lazy to get out of my bed to turn my computer off.

This app allows you to shut down your Windows computer from a phone, laptop, and/or any device with a browser. All you have to do is insert the computers local IP address,  socket, and the route /shutdown then your Windows computer will shut off.

It only allows for use in a local network.

This app uses NodeJS with ExpressJS, so make sure you have them installed. The program launches a bat that will shut down the Windows computer. 
You may want to alter the code to make it more secure, so your friends don't turn your computer off for fun.

P.S.  You can tie this program to start up by making a bat that runs the command "node LazyShutDown.js" and putting a shortcut to the command in "AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup". Also check me out at [www.josephdespain.com](http://www.josephdespain.com).
