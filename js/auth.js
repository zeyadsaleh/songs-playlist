function auth(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  //for not refreshing the page 
  event.preventDefault();

  var url = `https://nilepromotion.com/pa-test/wp-json/test/v2/creds?username=${username}&password=${password}`;
  fetch(url).then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          if (data.login === "successful") {
            sessionStorage.setItem("login", "successful"); // put in the session storage
            window.location.href = "/";
          } else {
            document.getElementById("error").innerText = "Wrong username or password!";
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
          }
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
};