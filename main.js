// Get Racing Data
const getData = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/1/driverStandings.json`)
    console.log(response.data)
    return response.data
}


// Constant to Hold DOM Elements
const DOM_Elements = {
    ranger_list : '.ranger-list'
}

const create_list = (id, season, round, StandingsLists) => {
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${round} ${season} ${StandingsLists} </a>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

// Function to load data and display html
const load_data = async () => {
    const rangers = await getData();

    array.from(rangers).forEach( ranger => create_list( ranger.season, ranger.round, ranger.StandingsLists ));
}

// Function to Clear DATA
const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = "";
}


// fetch data???
// TRY WITH A FETCH METHOD?