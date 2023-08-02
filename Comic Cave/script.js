// 'const' is to set a variable as a constant neverchanging variable -> //
// for the const comicPanel (line 34)  its to allow the .js file to be displayed into the "comic-panel" class in div located in the index.html (WHERE you would like to put the variable in the workspace using the id)// 

// (line: 36)  is to create the start of the function made as a CONSTANT once again

// (line: 38) & (line: 72) The trycatch and the if statement was to ensure that if the api is incapable of loading (if the code is not 200) its to through an error within the console log saying "200 API COULD NOT BE LOADED"

// (line: 39) As for the const api, is to set a variable for the api to sit if needed to be used multiple times when creating the api

// (line: 41) For this line its to create a fetch response for the API url with filters within the url to help define the later code being written with 
//            underneath this line a console.log to report the response of the api in the console with the filters in the url it will write the promise out as a json log

// (line: 42) & (line: 43) & (line: 44) if requirements are met through the if statement then the api would be able to load; 
//            the next three lines of code are to set variables based on the below api, (line: 45) is to create a constant variable as data to pull the api response in json code.
//            The second variable (line: 47) is to then create a results variable pulling the results through the promise sat throught the "data." as it will pull the information from the console
//            The third variable (line: 49) is for the upcoming code to set a counter for the api to limit the amount of information that is being pulled from the hundreds of lines of data

// (line: 51) -> (line: 55) These lines are to set through the variable and different statements to allow a limiter and filter of information being pulled through the promise to create a filter for the comics 
//             ONLY with names within the each result in the promise.
//             the variable has already been set so the next part was to create the for statement which is made from a let variable to be flexable as it will go through multiple numbers
//             and sets the "i" to zero then after that if the "i" is equal or less than 500 it will add 1 to the nullCounter meaning that it has found the first out of the 500 with a name that is NOT "null"
//             then it opens into an if statement saying that if the name of the result is NOT null then add one to the nullCounter. 
//             however, it would continue forever if not for the next if statement saying if the nullCounter is small or equal to 8 then it will show the html code to display the api

// (line: 57) - > (line: 63) This part of the code is to set the constant variable as html and will look at the html code and also pull the resulst from the promise by filtering the data
//             this html will then be displayed on the index.html code through the identifier which was set earlier in the js file "comic-panel" so this html code will replace that div 
//             showing the current html here. for the filter to pull the specific information needed from the promise, ${resulst[i].cover_date} will look SPECIFICALLY for the "cover_date"
//             within the promise within the already filtered out issues from the for statement.

// (line: 65) will display the html within a specific location and pulls back the html previously written {(line: 57)->(line: 63)}

// (line: 75) This allows the function to run

const comicPanel = document.getElementById('comic-panel');

const comicapiFunction = async () => {

try {
    const api = 'aa41d35b7015deffd8ac03429c824ca6c692cfef';

    const response = await fetch(`https://comicvine.gamespot.com/api/issues/?api_key=${api}&format=json&sort=cover_date:desc`);
    if (response.status != 200){
        console.log(response.status + ' API could not be loaded');
    } else{
        const data = await response.json();

        const results = data.results;
    
        let nullCounter = 0;
    
        for (let i = 0; i <= 500; i++) {
            if(results[i].name != null){
            nullCounter++;
    
        if (nullCounter <= 8){
    
                const html = `
                <div class="comic">
                <img class ="comic_cover_img" src="${results[i].image.small_url}" />
                    <h4 class ="comic_title">Issue: ${results[i].issue_number} | ${results[i].name}</h4>
                    <p class = "comic_date">${results[i].cover_date}</p>
                </div>
                `;
    
                comicPanel.insertAdjacentHTML('beforeend',html);
    
                }
            }    
        }
    }
} catch (error) {
    console.log(error); 
}}

if (comicPanel){comicapiFunction();}