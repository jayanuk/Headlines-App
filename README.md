# Headlines-App
Take home challenge for StaffScanner

1. Solution comprise of 2 sections Web api and client project.

2. "Headline API" Contains the web api core project and "Headline ClientApp".

3. Open the web api .NET core project in visual studio latest with .net 8. Update the appsettings.json file with a working connection string to SQL server at the key "DefaultConnection". Get an API Key from newsapi.org and updat the API_KEY in appsettings.json.

4. Build and running the .net project in development mode will create the Database and initializes. No need to run any migrations.

5. Open "Headline ClientApp" in VScode and update the modify the .env file with the api path at API_BASE_URL.

6. Go to terminal and run:  npm install

6. Run: npm start in terminal for client app. The headlines will be loaded.
