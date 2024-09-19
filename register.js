

const apiURL = 'https://demo2.z-bit.ee/users';





function GetUserData() {

    const data = {
        newPassword : document.getElementById("PASSWORD").value,
        username : document.getElementById("MAIL").value,
        firstname : document.getElementById("FIRSTNAME").value,
        lastname : document.getElementById("LASTNAME").value,
    }


    console.log(data)
    fetch(apiURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      .then((response) => response.json())
      .then((json) => console.log(json));

}

 
