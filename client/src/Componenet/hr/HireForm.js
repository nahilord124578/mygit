import React, { useState } from "react";
import axios from "axios";
export default function EmployeeForm() {
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState(false);
  const [fail, setFail] = useState(false);
  const [status1, setStatus1] = useState(false);
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [showFormSubmitted, setFormSubmitted] = useState(false);
  const [gender, setGender] = useState(""); // State for Gender
  const [birthday, setBirthday] = useState(""); // State for Birthday
  const [address, setAddress] = useState(""); // State for Address
  const [specialization, setSpecialization] = useState("");
  const [bank, setBankAccount] = useState("");
  const [userid, setUserId] = useState("");
  const [showAdditionalAttributes, setShowAdditionalAttributes] =
    useState(false);
  const [Error, setError] = useState("");
  const handleBankAccount = (event) => {
    setBankAccount(event.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleEmergencyContactChange = (e) => {
    setEmergencyContact(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  // this is just for testing purpose i mean when a button is clicked it should have contain all necessary information to be sent to database
  const handleSubmit = async (e) => {
    console.log("here is a text content of submit button!!");
    console.log(document.getElementById("submission").textContent);
    document.getElementById("submission").textContent = "loading...";
    console.log(document.getElementById("submission").textContent);
    e.preventDefault();
    setStatus(false);
    let isValid = true;
    const nameRegex = /^[A-Za-z]+$/;
    const phoneRegex = /^[0-9]+$/;
    if (!firstName.match(nameRegex)) {
      alert("Please enter a valid first name");
      isValid = false;
    }
    if (!lastName.match(nameRegex)) {
      alert("Please enter a valid last name");
      isValid = false;
    }
    if (!department.match(nameRegex)) {
      alert("Please enter a valid department name");
      isValid = false;
    }
    if (!phoneNumber.match(phoneRegex)) {
      alert("Please enter a valid phone number");
      isValid = false;
    }
    if (!emergencyContact.match(phoneRegex)) {
      alert("Please enter a valid emergency contact number");
      isValid = false;
    }
    if (isValid) {
      setFormSubmitted(true); // if all condition is pass then submit the form other wise not submutt it to database
      try {
        const response = await axios.post("http://localhost:8000/message", {
          firstName,
          lastName,
          role,
          department,
          email,
          startDate,
          salary,
          phoneNumber,
          address,
          birthday,
          gender,
          userid,
          bank,
          emergencyContact,
          specialization,
          password,
        });
        // alert("success");
        setStatus1(true);
        setFormSubmitted(true); // used to check for a submittion of forms and display a message as submitted successfully !
        if (response.status === 201) {
          alert("user is registerd successfully ");
          document.getElementById("submission").textContent = "Hire Employe";
          document.getElementById("mean").textContent =
            " u have succesfully registerd user succesfully";
        }
      } catch (error) {
        setFail(true);
        if ((error.response.status = 408)) {
          // setError(response.data.error);
          setStatus(true);
          alert(
            "user already exist man try to choose a different name and password because the guys with this is id is exist exist already "
          );
          document.getElementById("submission").textContent = "Hire Employe";
          document.getElementById("mean").textContent =
            " u have not succesfully registerd user succesfully try again";
          // <Home />;
        } else {
          alert("error in sending a data ");
          console.log(error);
        }
      }
    }
  };

  return (
    <div className=" mx-auto font-sans">
      <div className="w-full max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
        >
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="form-input mt-1 block outline-none w-full bg-slate-300"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="form-input mt-1 block outline-none w-full bg-slate-300"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">Role</label>
              <select
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setShowAdditionalAttributes(true);
                }}
                className="form-select mt-1 block w-full outline-none bg-slate-300"
              >
                <option value=""></option>
                <option value="Doctors">Doctors</option>
                <option value="Radiologist">Radiologist</option>
                <option value="LabTechnician">Lab Technician</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Receptionist">Receptionist</option>
                <option value="ContentCreator">Content Creator</option>
              </select>
            </div>

            {showAdditionalAttributes && role === "Doctors" && (
              <div className="w-full px-3 mb-6">
                {/* Additional attributes for Doctors */}
                <label className="block text-gray-700">Specialization</label>
                <input
                  type="text"
                  className="form-input mt-1 block outline-none w-full bg-slate-300"
                  placeholder="Enter specialization"
                  onChange={(e) => {
                    setSpecialization(e.target.value);
                  }}
                />
              </div>
            )}
            {showAdditionalAttributes && role === "Radiologist" && (
              <div className="w-full px-3 mb-6">
                {/* Additional attributes for Doctors */}
                <label className="block text-gray-700">Specialization</label>
                <input
                  type="text"
                  className="form-input mt-1 block outline-none w-full bg-slate-300"
                  placeholder="Enter specialization"
                  onChange={(e) => {
                    setSpecialization(e.target.value);
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">Phone Number:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={10}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">Emergency Contact:</label>
              <input
                type="number"
                value={emergencyContact}
                onChange={handleEmergencyContactChange}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={10}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">
                Total Salary in Birr:
              </label>
              <input
                type="number"
                value={salary}
                onChange={handleSalaryChange}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={8}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700"> CBE account</label>
              <input
                type="number"
                value={bank}
                onChange={handleBankAccount}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={2}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">Department:</label>
              <input
                type="text"
                value={department}
                onChange={handleDepartmentChange}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={15}
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label className="block text-gray-700">Employe Id</label>
              <input
                type="text"
                value={userid}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={15}
                required
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={15}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-input mt-1 block w-full outline-none bg-slate-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="form-input outline-none mt-1 block w-full bg-slate-300"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">BirthDay:</label>
              <input
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                className="form-input mt-1 block outline-none w-full bg-slate-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap mx-2">
            <div className="w-full px-3 mb-2">
              <label className="block text-gray-700">Gender</label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Male
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6">
              <label className="block text-gray-700">Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-input mt-1 outline-none block w-full bg-slate-300"
                maxLength={20}
                required
              />
            </div>
            <div className="w-full px-3 mb-6"></div>
          </div>
          <button
            id="submission"
            type="submit"
            className="bg-blue-500 text-white py-4  rounded hover:bg-red-600 px-20 mx-10"
          >
            Hire Employee
          </button>
          {<p className=" hover:bg-zinc-400" id="mean"></p>}
        </form>
      </div>
    </div>
  );
}
