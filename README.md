### SuperApp
SuperApp is a multi-functional web application built using React, allowing users to explore different genres of entertainment, view personalized content, and access useful features like weather updates, note-taking, and movie recommendations.

## Features
# 1. Home Page
Users register by providing their name, username, email, and phone number. If all fields are correctly filled, the user is redirected to the Genre Page.

# 2. Genre Page
On this page, users can select at least three entertainment genres from a set of available options. Users click on the genre cards to make their selections. Once the genres are selected, the user can proceed to the next page by clicking the Next button.

# 3. Carousel Page
Here, users can view their registered details along with the selected genres. The page also displays current weather conditions based on the user's location, along with some relevant news. This page acts as a preview before proceeding further.

# 4. Dashboard Page
In the Dashboard, all previously entered and selected information (user details, selected genres, etc.) is visible. Additionally, users can:

## Add notes.
Set a timer. After these actions, the user can browse more content by clicking the Browse button to head to the Movies Page.
# 5. Movies Page
This page showcases movie posters based on the genres selected by the user. For each genre, a minimum of 5 random movie posters are displayed, giving users a tailored entertainment experience.

## Technology Stack
# Frontend: React.js, CSS
# State Management: React Context API
# API Integration: Weather API, Movie Database API for movie posters
