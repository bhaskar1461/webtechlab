async function fetchData() {

try {

document.getElementById("loading").style.display = "block";

const response = await fetch("https://jsonplaceholder.typicode.com/users");

if (!response.ok) {
throw new Error("Something went wrong");
}

const users = await response.json();

renderData(users);

}

catch (error) {

console.error("There was a problem fetching the data", error);
alert("Failed to fetch data");

}

finally {

document.getElementById("loading").style.display = "none";

}

}

function renderData(data){

const dataBody = document.getElementById("dataBody");

dataBody.innerHTML = "";

data.forEach(user => {

const row = document.createElement("tr");

row.innerHTML = `
<td>${user.id}</td>
<td>${user.name}</td>
<td>${user.email}</td>
`;

dataBody.appendChild(row);

});

}

fetchData();