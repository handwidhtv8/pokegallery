// IPQ Input -> Process -> Output

// Constants and State Variables (Data)

// Constant Data
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
//  State Data
let pokeData;
//Caches Element References
const $collection = $('#collection');

//  Attached Event Listeners
$collection.on('click', 'article.card', handleClick);

//Functions

// call immediately
init();

function init() {
    getData()
};

function getData() {
    // Fetch data using AJAX
    $.ajax(BASE_URL).then(function(data) {
        // take the returned data and assign it to a global state variable
        pokeData = data;
        //  call render to visualize it to the DOM
        render();
    }, function(error) {
        console.log('Error: ', error);
    });
}

function handleClick(){
    alert('card was clickety clicked');
}

function render() {
    //map over objects inside of pokeData results array
    //dynamically generate html for each element in the array
    // add that html to our collection element
    const htmlArray = pokeData.results.map(pokemon=> {
        return `
        <article class="card flex-ctr">
            <h3>${pokemon.name}</h3>
        </article>
        `;
    });

    $collection.html(htmlArray);
}