
## Constants

- `API_KEY`: The API key for accessing The Movie Database (TMDB) API.
- `BASE_URL`: The base URL for the TMDB API.
- `API_URL`: The URL for fetching popular movies.
- `IMG_URL`: The base URL for fetching movie poster images.
- `SEARCH_URL`: The URL for searching movies by a query.

## Elements

- `main`: The main container for displaying movie cards.
- `form`: The form element used for submitting a search query.
- `search`: The input element for entering search queries.
- `tagsEl`: The container for genre tags.
- `prev`: The button for navigating to the previous page of results.
- `next`: The button for navigating to the next page of results.
- `current`: The element displaying the current page number.
- `themeToggle`: The button for toggling between light and dark themes.
- `menuBtn`: The button for toggling the side menu.
- `overlayContent`: The container for displaying video overlays.
- `root`: The root element of the document.

## Variables

- `currentPage`: The current page number of the movie results.
- `totalPages`: The total number of pages available.
- `lastUrl`: The last URL used for fetching movies.
- `selectedGenre`: An array of selected genre IDs.
- `activeSlide`: The index of the currently active video slide.
- `totalVideos`: The total number of video slides.

## Initialize

Sets up the application by calling `init` on `DOMContentLoaded` event.

### init()

- Calls `setupTheme` to initialize the theme.
- Calls `setGenre` to initialize genre tags.
- Calls `getMovies` with `API_URL` to fetch and display popular movies.
- Calls `setupEventListeners` to set up various event listeners.

### setupTheme()

- Checks local storage for the `darkMode` setting and applies the corresponding theme.

### darkModeOn()

- Adds the `darkTheme` class to the root element and changes the source of various images to their dark mode versions.

### darkModeOff()

- Removes the `darkTheme` class from the root element and changes the source of various images to their light mode versions.

### setupEventListeners()

- Sets up event listeners for toggling the theme, submitting the search form, navigating pages, and toggling the side menu.

### toggleTheme()

- Toggles between light and dark themes and saves the setting in local storage.

### toggleSideMenu(e)

- Toggles the visibility of the side menu.

### setGenre()

- Generates genre tags dynamically and sets up click event listeners for them.

### toggleGenre(id)

- Adds or removes a genre ID from the `selectedGenre` array and fetches movies based on the selected genres.

### highlightSelection()

- Highlights the selected genre tags and adds a clear button for clearing the selection.

### addClearButton()

- Adds a clear button to the genre tags container if it doesn't already exist.

### clearGenres()

- Clears the selected genres and fetches the default list of popular movies.

### getMovies(url)

- Fetches movies from the provided URL and displays them. Updates the current page and total pages based on the response.

### showMovies(data)

- Displays the movie data in the main container by creating and appending movie elements.

### getColor(vote)

- Returns a color class based on the vote average of a movie.

### searchMovies(e)

- Handles the search form submission, fetches movies based on the search query, and resets the genre selection.

### updatePagination()

- Updates the pagination controls based on the current page and total pages.

### pageCall(page)

- Fetches movies for the specified page number.

### openNav(movie)

- Fetches and displays video overlays for the specified movie.

### closeNav()

- Closes the video overlay.

### showVideos()

- Displays the active video slide and updates the slide indicators.

## Event Listeners

- `themeToggle`: Toggles between light and dark themes.
- `form`: Submits the search form.
- `prev`: Navigates to the previous page of results.
- `next`: Navigates to the next page of results.
- `menuBtn`: Toggles the side menu.
- `left-arrow`: Navigates to the previous video slide.
- `right-arrow`: Navigates to the next video slide.

## Helper Functions

### getColor(vote)

- Determines the color class for a movie rating based on its vote average.

### showVideos()

- Displays the currently active video slide and updates the slide indicators.

### pageCall(page)

- Fetches the movies for the specified page.

### updatePagination()

- Updates the pagination controls based on the current page and total pages.

## Conclusion

This documentation provides an overview of the functionality and structure of the movie app code. The application fetches and displays popular movies from the TMDB API, allows searching for movies, filtering by genres, and includes features like pagination, theme toggling, and a side menu. The code is modular and well-organized, making it easy to maintain and extend.