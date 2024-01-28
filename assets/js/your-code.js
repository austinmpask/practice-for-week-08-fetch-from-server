export function getAllDogs() {
  const url = "/dogs";
  const headers = {
    "Content-Type": "text/html",
  };

  const options = {
    method: "GET",
    headers: headers,
  };
  return fetch(url);
}

export function getDogNumberTwo() {
  // Your code here
  const url = "/dogs/2";
  return fetch(url);
}

export function postNewDog() {
  // Your code here
  const url = "/dogs";
  const body = new URLSearchParams({
    name: "beans",
    age: "2",
  });
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const options = {
    method: "POST",
    body: body,
    headers: headers,
  };

  return fetch(url, options);
}

export function postNewDogV2(name, age) {
  // Your code here
  const url = "/dogs";

  const body = new URLSearchParams({
    name: name,
    age: age,
  });
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const options = {
    method: "POST",
    body: body,
    headers: headers,
  };

  return fetch(url, options);
}

export function deleteDog(id) {
  // Your code here
  const url = `/dogs/${id}/delete`;

  const headers = {
    AUTH: "ckyut5wau0000jyv5bsrud90y",
  };

  const body = new URLSearchParams({
    id: id,
  });

  const options = {
    method: "POST",
    headers: headers,
    body: body,
  };

  return fetch(url, options);
}
