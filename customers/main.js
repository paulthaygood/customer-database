// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var customersDiv = document.querySelector('.customers');

  function createCustomers(customersData) {


    for (var i = 0; i < customersData.length; i++) {
      var person = customersData[i];


    var personPictureURL = person.picture.large;
    var personName = person.name.first + " " + person.name.last;
    var personEmail = person.email;
    var personLocation = person.location.street + ";" + " " + person.location.city + "," + " " + person.location.state + " " + person.location.postcode;
    var personPhone = person.phone;

    var personDiv = document.createElement('div');
    personDiv.className = "person";

    var personPictureImg = document.createElement('img');
    personPictureImg.src = personPictureURL;
    personDiv.appendChild(personPictureImg);

    var personNameDiv = document.createElement('div');
    personNameDiv.innerHTML = personName;
    personDiv.appendChild(personNameDiv);
    personNameDiv.className = "name";

    var personEmailDiv = document.createElement('div');
    personEmailDiv.innerHTML = personEmail;
    personDiv.appendChild(personEmailDiv);
    personEmailDiv.className = "email";


    var personLocationDiv = document.createElement('div');
    personLocationDiv.innerHTML = personLocation;
    personDiv.appendChild(personLocationDiv);
    personLocationDiv.className = "location";

    var personPhoneDiv = document.createElement('div');
    personPhoneDiv.innerHTML = personPhone;
    personDiv.appendChild(personPhoneDiv);
    personPhoneDiv.className = "phone";

    customersDiv.appendChild(personDiv);

  }
}
$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {

    createCustomers(data.results);

  }
});
