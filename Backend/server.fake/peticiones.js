var settings = {
  "url": "http://localhost:3000/construccion/1",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/construccion/2",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/construccion/3",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/construccion",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "38",
    "first_name": "jose",
    "last_name": "Bilton",
    "email": "josemartinez@gmail.com",
    "gender": "Female",
    "ip_address": "37.68.114.247",
    "ip_programacion": "Supervisor"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/construccion",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "49",
    "first_name": "cristiano",
    "apellido": "Blenkiron",
    "correo electrónico": "cristiano@list-manage.com",
    "género": "masculino",
    "dirección_ip": "26.19.29.53",
    "ip_programacion": "Subcontratista"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/construccion/5",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "5",
    "first_name": "juan",
    "apellido": "Farnando",
    "correo electrónico": "fernando4@ifeng.com",
    "género": "Agender",
    "dirección_ip": "75.30.199.31",
    "ip_programacion": "Supervisor"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/construccion/6",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "6",
    "first_name": "santiago",
    "apellido": "colon",
    "correo electrónico": "santiago5@squarespace.com",
    "género": "Masculino",
    "dirección_ip": "30.44.26.74",
    "ip_programacion": "Electricista"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/construccion/8",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/construccion/7",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/construccion/6",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});