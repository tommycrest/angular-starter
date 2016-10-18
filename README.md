ANGULAR STARTER PACK 
---------------------------------------------------------------------------------------------------
by Space Mudge

English Version
---------------------------------------------------------------------------------------------------
1. Run npm install
2. Run bower install
3. Run node server.js ( testing activity in localhost )

The execution of point number 3 permit to activate a little http server in localhost on port 8000
for testing activity. 

angular-starter
    .bowerrc
    .gitignore
    /app
        /app/bower_components/
        /css
            app.css
        /images
        /partials
            home.html
        /scripts
            app.js
            controller.js
            service.js
            /vendor
    bower.json
    index.html
    /node_modules
    package.json
    README.md
    server.js
    Gruntfile.js

4. It's possible to update the package with new package, with the following command:
    4.1 bower install --save-dev
    4.2 npm install --save-dev

5. In this subfolder "partials" goes every html that compose our routing page application

6. In this subfolder goes the not propetary script ( mainly js )

7. Gruntfile.js for using the template with Grunt


Italian Version
----------------------------------------------------------------------------------------------------

1. Eseguire npm install 
2. Eseguire bower install
3. Eseguire node server.js

L'esecuzione del punto 3 permette di attivare un piccolo server per eseguire dei test in sviluppo
della applicazione angular che si vuole sviluppare al seguente indirizzo: http://localhost:8000/

angular-starter
    .bowerrc
    .gitignore
    /app
        /app/bower_components/
        /css
            app.css
        /images
        /partials
            home.html
        /scripts
            app.js
            controller.js
            service.js
            /vendor
    bower.json
    index.html
    /node_modules
    package.json
    README.md
    server.js

4. Per inserire nuovi package nei rispettivi json di bower / npm utilizzare le opzioni:
    4.1 bower install --save-dev
    4.2 npm install --save-dev
    
5. Nella sotto cartella "partials" devono essere inseriti tutti gli html che compongono 
la nostra applicazione SPA ( Single Page Application )

6. Nella cartella "vendor" devono essere inseriti eventuali scripts non propietari

Have a nice trip! 
