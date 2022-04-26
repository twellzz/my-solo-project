const url = "http://localhost:1234";

function pullPatients() {
  return fetch(`${url}/`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

function postPatient(event) {
  return fetch(`${url}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ event }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}
export const patientService = {
  pullPatients,
  postPatient,
};
