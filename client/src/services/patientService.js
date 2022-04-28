const url = "http://localhost:3001";

function pullPatients(id) {
  return fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}

function postPatient(event) {
  return fetch(`${url}/`, {
    method: "POST",
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => e);
}
export const patientService = {
  pullPatients,
  postPatient,
};
