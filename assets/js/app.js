
const cl = console.log;
const countryCard= document.getElementById('countryCard');
const searchBar = document.getElementById("searchBar");

let newCountries = countries.map(element => {
	if(element.capital == undefined){
		element.capital = 'NA'
		return element
	}else{
		return element
	}
	
})
cl(newCountries)

function templating(arr){
    let result = '';
    arr.forEach(ele => {
        result += `
              <div class="col-sm-3">
					<div class="card mt-4">
						<div class="card-body">
							<figure class="mycard">
								<img src="${ele.flag}" alt="" class="img-fluid">
								<figcaption class="text">
									<h1 class="text-warning">${ele.name}</h1>
									<ul class="list">
										<li>
										<div class="row">
										<div class="col-sm-6">
											<strong>Capital:</strong>
										</div>
										<div class="col-sm-6">
											${ele.capital}
										</div>
										</div>
								
										</li>
										<li>
										<div class="row">
										<div class="col-sm-6">
											<strong>Languages:</strong>
										</div>
										<div class="col-sm-6">
											${ele.languages}
										</div>
										</div>
										</li>

										<li>
										<div class="row">
										<div class="col-sm-6">
											<strong>Population:</strong>
										</div>
										<div class="col-sm-6">
											${ele.population}
										</div>
										</div>

										</li>
									</ul>
							</figure>
						</div>
					</div>
				</div>
        `
    });
    countryCard.innerHTML = result;
}
templating(newCountries);
// cl(countries);


const oncountryEnter = (e) => {
	let enteredValue = e.target.value
	let NewCountryArray = newCountries.filter(ele =>{
		return ele.name.toLowerCase().includes(enteredValue)
	})
	templating(NewCountryArray);
}
searchBar.addEventListener("keyup", oncountryEnter);

// function checkCapital(cardArray){
//     cardArray.forEach(e => {
//         if(e.capital)
// 	})
// }
// checkCapital(countries)
