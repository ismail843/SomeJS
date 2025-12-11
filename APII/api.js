// try{

// function getWeather(city){

//     let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`

//    let raw = await( fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
// );

// if(!raw.ok){
//     throw new console.Error();
    
// }
// let realdata = await raw.json();
// }catch (err){

// }


// }
// getWeather("london")


async function getWeather(city) {
  try {
    let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

    let raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    );

    if (!raw.ok) {
      throw new Error("City not found, something went wrong");
    }

    let realdata = await raw.json(); // FIXED
    console.log(realdata);
    // if()

  } catch (err) {
    console.error("Error:", err.message); // FIXED
  }
}
getWeather("gadag")


let users = [
  "john.doe@example.com",
  "manju.kumar@gmail.com",
  "priya.sharma@yahoo.com",
  "alex.fernandez@outlook.com",
  "contact.support@company.com"
];

function sendEmail(email){
    return new Promise((resolve, re))
}
