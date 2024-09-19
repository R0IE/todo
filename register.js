

const apiURL = 'https://demo2.z-bit.ee/users';


function GetUserData(DATA) {
    fetch(apiURL, {
        method: "POST",
        body: JSON.stringify(DATA),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

 

GetUserData()