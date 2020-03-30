# Prepr Challenge
Richard Antao's Prepr Fullstack Developer Challenge submission.

## Frontend 
The frontend uses a combination of Laravel's blade template engine and React. The blade components handle authentication, through Laravel's authentication template, and the React components handle data from the API and state management of the UI.

For a simple application like this, Redux isn't necessary, as it is fairly easy to map out the state, and pass props down to child when the hierarchy is only two levels, but for larger React applications, I always use Redux to efficiently manage state and props.

### Dashboard
Dashboard is the parent component in the app's React component hierarchy. After Dashboard renders the List and Map component, it makes an API call to the backend through the axios library. Once the data has been fetched, the `labs` state is set with `setState`, and is passed as props its children components.

### Nav
Nav is inherited from Blade, and implements authentication and access control, preventing unauthenticated user's from seeing sensitive information. User's are able to handle registering and logging before they are authenticated, and can logout from the application when they please.

### List
The List component is a child of Dashboard, and renders the lab data once it has been passed down from Dashboard as props. The list destructures the labs array and maps each element by its id, title, and address, and renders the elements in a scrollable list.

### Map
The Map component utilizes the Google Maps API and sets markers on the respective locations after the labs have been passed down as props from the Dashboard in similiar manner to the List, however the labs array is desctructured for its id, latitude, and longitude.

## Backend 
The Backend was created with the MAMP stack, and utilizes PHP's Laravel web framework. Laravel has a lot of great built-in functionality that makes developing web applications a lot easier.

### Authentication
The authentication layer has auto-generated using the artisan command line:
`php artisan make:auth` which implements the entire authentication layer. This functionality makes it easier to ensure that proper authentication methods are implemented into the web application.

### Models
The data for the labs was stored in a MySQL database. The data from the spreadsheet was inserted into database after the following migration was ran:

```php
<?php
public function up()
    {
        Schema::create('labs', function (Blueprint $table) {
            $table->increments("id");
            $table->string("title");
            $table->float("latitude");
            $table->float("longitude");
            $table->string("address");
            $table->string("city");
            $table->string("country");
            $table->timestamps();
        });
    }
```
This allowed for the data to be stored for the UI to call.

### Controllers
The controller below was routed to `/api/labs`, which would fetch all the lab data from the database upon request from the client.
```php
<?php>
class LabsController extends Controller
{
    public function index() 
    {
        $labs =  Lab::all();

        // return view('dashboard')->with('labs', $labs);
        return $labs;
    }
}
```

### Routes
#### Web Routes
The three routes below were for handling page navigation and authentication.
```php
<?php>
Route::get('/', function() {
    return view('welcome');
});

Auth::routes();

Route::get('/dashboard', 'DashboardController@index');
```

#### API Routes
The first route below handles authenticating the user, to ensure that the token received is still valid. The second route calls the Labs index function, to fetch the labs from the MySQL database.
```php
<?php
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/labs', 'LabsController@index');
```