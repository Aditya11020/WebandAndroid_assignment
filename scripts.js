clevertap.spa = true
function onUserLogin() {
  console.log("login successful")
  clevertap.onUserLogin.push({
    "Site": {
      "Name": document.getElementById("t1"),            // use the Name variable
      "Email": document.getElementById("t2"),         // Email address of the user
      "Phone": document.getElementById("t3"),           // Phone with the country code
      "DOB": new Date(document.getElementById("t4"))                 // Date of Birth. Date object   

    }
  })
  clevertap.event.push("User Logged In");
  alert("Logged In Successfull")
};

function onProfilePush() {
  console.log("profile push")
  clevertap.profile.push({
    "Site": {
      "Name": document.getElementById("t1"),           // use the Name variable
      "Email": document.getElementById("t2"),         // Email address of the user
      "Phone": document.getElementById("t3"),           // Phone with the country code
      "DOB": new Date(document.getElementById("t4"))                 // Date of Birth. Date object   
    }
  })
  clevertap.event.push("Profile Pushed");
  alert("Pushed Successfull")
};


