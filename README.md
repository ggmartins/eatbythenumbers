### Eat By Numbers - Princeton MediHack 2018 - "Most Likely to Become a Startup" Prize

#### [Link](https://ggmartins.github.io/eatbythenumbers/)

#### Guilherme Martins, Heder Petersen, Steven Gitarts. 

Instructions:

1. uncompress files:
tar xvzf eatbynumbers-v0.1.tgz

2. change directory
cd eatbynumbers

3. run a local webserver 
python3 -m http.server 

4. access local URL via chrome/safari
http://127.0.0.1:8000

5. select the nutrients (coordinates) to track
drag the mouse over the nutrient coordinates, you can select, for example, high fiber levels and low sugar.
Map should show the available nearby restaurants and their meals matching the selected criteria.
If you want to deselect a selected area, please click on the axis *outside* the selected area.

Observation
- The buttons top Keep, Exclude, Export, Hide Ticks, Dark are used for debugging only.
- The fields Coord Name, Lat, Lng and Add button, are for debugging only.
- Sample of 25 entries can be used to filter results by restaurant name.

Inspired by https://syntagmatic.github.io/parallel-coordinates/
