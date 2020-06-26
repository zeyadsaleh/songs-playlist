function auth(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
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
            sessionStorage.setItem("login", "successful");
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