import React, { useState } from "react";
import JoinNavbar from "../components/joinNavbar"

const FarmerSignupForm = () => {
  const [step, setStep] = useState(1);

  // progress percentage based on step
  const getProgress = () => {
    if (step === 1) return 33;
    if (step === 2) return 66;
    if (step === 3) return 100;
    return 0;
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div>
      <JoinNavbar />
      <section style={{background: "#efefd480"}}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "13rem 20px"}}>
          {/* Progress bar */}
          <div style={{ marginBottom: "50px" }}>
            <div
              style={{
                background: "#e0e0e0",
                borderRadius: "10px",
                height: "10px",
                width: "100%",
              }}
            >
              <div
                style={{
                  height: "10px",
                  width: `${getProgress()}%`,
                  background: "#4caf50",
                  borderRadius: "10px",
                  transition: "width 0.3s ease-in-out",
                }}
              ></div>
            </div>
            <p style={{ textAlign: "right", fontSize: "14px", marginTop: "5px" }}>
              Step {step} of 3
            </p>
          </div>

          {/* Form steps */}
          {step === 1 && (
            <div class="personalInfo">
              <h2>Personal Information</h2>
              <label>Full Name: <input type="text" /></label><br />
              <label>Gender: 
                <select>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </label><br />
              <label>Age: <input type="number" /></label><br />
              <label>Phone Number: <input type="tel" /></label><br />
              <label>Email: <input type="email" /></label><br />
              <button className="nxtBtn" onClick={nextStep}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div class="personalInfo">
              <h2>Farm Information</h2>
              <label>County: <input type="text" /></label><br />
              <label>Location: <input type="text" /></label><br />
              <label>Farm Size (acres): <input type="number" /></label><br />
              <label>Crops Grown: <input type="text" /></label><br />
              <label>Irrigation Method: 
                <select>
                  <option value="">Select</option>
                  <option>Manual</option>
                  <option>Drip</option>
                  <option>Sprinkler</option>
                  <option>None</option>
                </select>
              </label><br />
              <button className="prvbtn" onClick={prevStep}>Back</button>
              <button className="nxtBtn" onClick={nextStep}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div class="personalInfo">
              <h2>Solar Interest</h2>
              <label>
                <input type="radio" name="solar" value="Yes" /> Yes
              </label><br />
              <label>
                <input type="radio" name="solar" value="No" /> No
              </label><br />
              <label>
                <input type="radio" name="solar" value="Maybe" /> Maybe Later
              </label><br />
              <button className="prvbtn" onClick={prevStep}>Back</button>
              <button className="farmSubmit" type="submit">Submit</button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FarmerSignupForm;
