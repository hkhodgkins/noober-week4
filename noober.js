window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // Loop through all of the available rides contained within json variable

  for (let i=0; i<json.length; i++)
  {

  // Create well-named variables for each data point in the Object (and following design team's hard coded UI mockup):
    // name ("first _ last")
    let passengerName=`${json[i].passengerDetails.first} ${json[i].passengerDetails.last}`
    // phone number
    let passengerPhoneNumber=`${json[i].passengerDetails.phoneNumber}`
    // pickup location line 1 ("street number and name")
    let pickupLine1=`${json[i].pickupLocation.address}`
    //pickup location line 2 ("city, state _ zip")
    let pickupLine2=`${json[i].pickupLocation.city}, ${json[i].pickupLocation.state}, ${json[i].pickupLocation.zip}`
    
    // dropoff location line 1 ("street number and name")
    let dropoffLine1=`${json[i].dropoffLocation.address}`
    //dropoff location line 2 ("city, state _ zip")
    let dropoffLine2=`${json[i].dropoffLocation.city}, ${json[i].dropoffLocation.state}, ${json[i].dropoffLocation.zip}`
    // number of passengers in their party (store in memory)
    let numberOfPassengers=json[i].numberOfPassengers

  // Use conditional logic to display level of service requested. Luxury "Noober Purple" always supercedes larger "Noober XL" requests.
  // if "Noober Purple" is requested, display "Noober Purple"
  // then, check if there are more than 3 passengers in the ride request. If so, display Noober XL
  // otherwise, if neither "Noober Purple" nor "Noober XL" is requested, display "Noober X"
  let serviceLevel
  if (json[i].purpleRequested==true) {serviceLevel=`Noober Purple`}
  else if (numberOfPassengers>3) {serviceLevel=`Noober XL`}
  else {serviceLevel=`Noober X`}

  // Create variable for HTML element
  let rideList=document.querySelector(`.rides`)

  // Reference data from each ride to populate rides div with appropriate HTML
  rideList.insertAdjacentHTML(`beforeend`,`
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${serviceLevel}</span>
  </h1>

  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${passengerName}</h2>
        <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${pickupLine1}</p>
        <p>${pickupLine2}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${dropoffLine1}</p>
        <p>${dropoffLine2}</p>
      </div>
    </div>
  </div>
  `)

  }

})