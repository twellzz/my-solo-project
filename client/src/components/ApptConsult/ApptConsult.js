import { useRef } from "react";
import "./style.css";
import { patientService } from "../../services/patientService";

export default function ApptConsult(e) {
  const submitCpf = useRef();

  function handleConsult() {
    const cpf = submitCpf.current.value;
    console.log(cpf);

    patientService.pullPatients(cpf);
  }
  return (
    <div class="appt-consult-container">
      <div class="consult-appt">Consult Registered Patient</div>
      {/* <form className="consult-form">
        <label className="label">Type CPF</label>
        <input className="label" ref={submitCpf}></input>
        <button type="click" className="label" onClick={handleConsult}>
          Consult
        </button>
      </form> */}
    </div>
  );
}
