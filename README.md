# IMD1005B-A2

---

## Reflections

Welcome to Mars! For this assignment, I decided to take you to our neighbouring planet. Choosing the sci-fi approach, I hope you get to view how beautiful this planet and space is while enjoy some of the information in my writing.

Compared to A1, I had a few "upgrades" this round:

- JavaScript lightbox! Every image has a lightbox and can be closed with either hitting Esc or clicking the Exit button
- ```picture``` tag for image optimization instead of plain ```img```
- Skiplinks
- Nav bar hitbox and better responsiveness on mobile (still I'd like to put in extra effort to make a hamburger nav)
- Overall more creative grid / flex layout

Taking your feedback from A1, I made sure not to set any black to #000 black. The colour palette for the site represents Mars dusty red, and I made sure to make them accessible contrast-wise.

The biggest improvement this time around I would say was the versatility of the use of grid and flexbox. I think I have a bit better understanding of when to use which now, and they worked for the most part as expected. Oh - also, I discovered a new property that helped me tremendously in styling images as I intended to: ```object-fit```. This was a life saver and I was able to make images size seemlessly and create beautiful layouts and get creative with it.

The biggest challenge for me was JavaScript. I sweat quite a bit trying to get the lightbox feature to work, and it took many rounds of debugging, reworking for it to work as intended.

Things I wish I could implement (some I know the basis of how to make it work but decided not to due to time constraints):

- Hamburger menu
- Modular code templates upon page load: not having to copy paste repeated code on every page (header, footer, hero banners etc.)
- Alt caption inside lightbox: grab alt text and insert into an empty ```p``` tag
- Custom fancy cursor
- Fancy animation / effects
- ...

Overall, this assignment was such a fun experience, and to be honest I think it would be top 3 portfolio worthy piece for me!

---

## Attribution

### Images

- Photo by RDNE Stock project on [Pexels](https://www.pexels.com/photo/astronauts-holding-hands-standing-on-brown-mountains-8474484/)
- Photo by Francesco Ungaro from [Pexels](https://www.pexels.com/photo/starry-sky-998641/)
- Image by [Alan Frijns](https://pixabay.com/users/alan_frijns-16705522/) from [Pixabay](https://pixabay.com/photos/mars-sunset-soil-rocks-sand-7459788/)
- Photo by RDNE Stock project on [Pexels](https://www.pexels.com/photo/a-person-in-space-suit-standing-on-a-rocky-mountain-8474703/)
- Curiosity Rover by [NASA](https://science.nasa.gov/resource/a-picture-postcard-from-curiositys-navcams/)
- Photo by [Pixabay](https://www.pexels.com/photo/gray-and-white-robot-73910/)
- Photo by [Photobank Kiev](https://unsplash.com/photos/3-men-standing-on-rocky-shore-during-daytime-Opzk_hvwO9Q) on Unsplash
- Blue sunset on Mars by Curiosity Rover [NASA](https://solarsystem.nasa.gov/system/downloadable_items/3025_PIA19401.jpg)
- Photo by [SpaceX](https://www.pexels.com/photo/white-space-ship-and-brown-planet-586030/)
- Olympus Mons by ESA Mars Express [Andrea Luck](https://www.flickr.com/photos/192271236@N03/)
- Cloudy Valles Marineris by ESA Mars Express [Andrea Luck](https://www.flickr.com/photos/192271236@N03/53745802596/)
- North Polar Cap by ESA Mars Express [Andrea Luck](https://www.flickr.com/photos/192271236@N03/52876607762/)
- Dust storm near Olympus Mons by ESA Mars Express [Andrea Luck](https://www.flickr.com/photos/192271236@N03/52929040126/)
- Phobos over Mars by ESA Mars Express [Andrea Luck](https://www.flickr.com/photos/192271236@N03/)

### Knowledge

- [Temperatures Across Our Solar System](https://science.nasa.gov/solar-system/temperatures-across-our-solar-system/#:~:text=The%20median%20surface%20temperature%20on,F%20(%2D153%C2%B0C))
- [The Fact and Fiction of Martian Dust Storms](https://www.nasa.gov/solar-system/the-fact-and-fiction-of-martian-dust-storms/)

---

## Issues log

- Safari ```height``` property behaves unexpectedly when set to 100% - appeared in lightbox ```picture``` elemment : FIXED
- Safari ```background-blend-mode``` renders weird when there are 2 backgrounds (an image and a colour overlay) : FIXED

- Child elements can't override parent elements' ```z-index``` : FIXED
- ```flex``` layout breaks when width conflicts with ```h1``` length : FIXED

- JS Event listener for opening / closing lightbox ```if``` conditions nesting : FIXED