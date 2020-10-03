[] take inventory of current code, some saga stuff has been done

### Home Page
[x] display all of the movies
  [x] write a GET route in Home.js
    look at redux-saga-garden
[x] When a movie is clicked, take the user to the `/details` view
  [x] need withRouter, push
    look at react-gallery


### Details Page

This should show all details **including genres**, for the selected movie.

[x] make a GET for a specific movie
  display details on DOM
[x] include button, `Back to List`, which returns use to the Home Page
> Base functionality does not require the movie details to load correctly after refresh of the browser.


### Add Movie Page
This should show:

[] an input field (for the movie title)
[] an input field (for the movie poster image URL))
[] a textarea (for the movie description)
[] a dropdown (for the genres)

Have the buttons:
[] `Cancel` button, which should bring the user to the Home/List Page
[] `Save` button, which should update the title and description in the database and bring the user to the Home/List Page (which now has the new movie)

> Hint: Look at the /api/movie POST route -- it's been made already
> Hint: You'll want to use the genres that are in the db for your dropdown
> Base functionality does not require being able to select more than one genre for a new movie