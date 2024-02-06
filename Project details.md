### App creating npm create-react-app netflix-gpt
### Component Making Body , Header,  Dynamic Login Page ,Browse 
### Route Setup Body->  Login and Browse
### Header Componenet creating 
### Login Componenet creation adn click to sign in click to sign up 
### Form validation  (using Rejex ) -> validate email and password  if it is wrong then give an error message also   
    problem fasing = 1. didnt pass proper ref (.current.value) due to this alwasys give invalid 2. onSubmit <= onChange  
### useRef 
### Authentication .google fireBase
### Deploying app for Production
### Authentication and exporting auth to central place 
    how to setup Authentication->firebase doc ->Doc-> Authentication ->password Authentication 
### Sign in and Sing up setUp 22/01-1
### creating store ( Redux Store ) 23/01-1
        - userSlice,appStore,Providing 
### When Sign In ,Sign Up Store the User data to 
        - used manager Users  Get the currently signed-in user onAuthStateChanged api 
### Navigate acording to Sign In, Sign Up using useNavigate Hook 
### Browser Sign Out and How to move to Login Page 
        - signOut api needed from password authentication (Header Component)
### Update user profile API - From web-manage Users
### Storing the photo and userName to Display to Header 
### Implenet Sign Out 
### Update profile 

***bug fixing 1:-sign up user displayName and profile pichter update
***bug fixing 2:- if the user is not logged in redirect/browse to Login page vice-versa
*** problem facing and solution = 
        whenever i SignIn,SignOut,SignUp my onAuthStateChanged takes care all the things 
        - like navigate to browse page if SignIn,SignUp,
               navigate to Login page is if SignOut ,
        - adding user to store when Sign in ,Sign Up and 
          Delete the user From the store if Signout    

## UnsubScribe the onAuthStateChange callback
## add Hardcorded values to the constants file
## Register TMDB API create an app & get access token 
## get data from TMDB now playing movie list API
## adding movie data to the store (movieStore) 24/01-2


### making video tittle and passing the data to it  
### making videobackground
### want to get trailer of the movie how ?
### storing the trailer of the movies to redux Store 

problem : i want only trailer and i hav list of objects .how do i get the movie object 
Solution: const trailer = json.result.filter ( movie => movie.type == "Trailer" )

redux is Storing 
1.userData 
2.movieList 
3.storing the trailer deatils to the store Slice 

### making videoTittle
### making videoBackGround
### playing YT trailer movie automatically
### tailwind adjestment

### make custom hook to fetch different type of movies from TMDB 
### made dynamic component name as SecondaryContainer, MovieList, MovieCard to render the movie in row 
### adjest this row as netflix have in there UI 

### created Gpt button
### created gpt searchbar component 
### gpt component have multiple laungauge option

Problem :- how can i feature multiple lang in app
1. made lang Constant files
2. Suppoered Language Array
3. used this array to render the option for Select
4. made configSlice to store the selected value 
5. base on value in the store i show langauge on search sections

#### Inteigrating ChatGPT

### openAI api genration
### installing api library name npm openai it give you helper function which 
### authorize the openAI api things
### fetch the data using openAI helper function 
### done with GPTSearchBar => fetch the data => pass the data to tmdb func => store the data to redux store   

### i have data at redux store for perticular type of movie like funny indian movie 
### create GPTMovieSuggestions which help to render the poster acording to redux data movie 
        used reusable component MovieList where i pass the data (props) like movieName and movieResult 
        i used movieName for Looping 
### fix the bug like if search bar is empty then dont show any thing 
        how -> useRed varible is empty then store the empty in redux -> empty thing will not render



### UnderStanding the Memoization of data in our apps
        if our redux store already have the data then dont need to fetch the data again in useEffect


Buidling GPT search page 
        task- when i click on the padge then show me the component otherwise dont show  toggle functionallity

task to complite 
        gpt component
        create gpt slice 
        toggle functionallity


problem  : i am not able to click on the button 
causes   : my header is overlaped with other 
solution : i have to apply z index on header component 

openAI key org-kxacl9v7CiYDttrmlzYpW0lW
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


how to use openai api
1.install npm => npm install --save openai
2.to autherize create new file name openai.js and 
export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY ,
  dangerouslyAllowBrowser: true 
}); 
3.with helper function ,this helper function give the data which we want and we can extract the data from it and render on UI