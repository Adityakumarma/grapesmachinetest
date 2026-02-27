import React, { useState } from "react";
import { fetchHospitals, loginUser } from "../api/authAPI";
import { useNavigate } from "react-router-dom";



function Login() {

  const [phone, setPhone] = useState("");
  const [hospitalId, setHospitalId] = useState("");
  const [password, setPassword] = useState("");
  const [hospitals, setHospitals] = useState([]);

  const navigate = useNavigate();

  const getHospitals = async (e) => {
     e.preventDefault();  
    const res = await fetchHospitals(phone);
    setHospitals(res.Hospital);
  };

  const handleLogin = async () => {

    const res = await loginUser({
      PhoneNumber: phone,
      HospitalID: hospitalId,
      Password: password,
    });

    localStorage.setItem("token", res.Token);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">


      <div className="flex flex-col items-center justify-center p-6">

        <img
          src="./src/assets/grapeslogo.png"
          className="w-40 md:w-56 mb-6"
          alt=""
        />

        <h1 className="text-gray-700 font-bold text-lg md:text-xl text-center">
          Welcome, to Grapes HMS
        </h1>

        <img
          src="./src/assets/sthetho.png"
          className="w-52 md:w-72 mt-8"
          alt=""
        />

        <div className="p-3 shadow rounded w-full max-w-xs mt-6 text-center">
          <h1 className="text-purple-600 font-semibold">
            Grapes IDMR
          </h1>
        </div>
      </div>


      <div className="flex items-center justify-center p-6">

        <div className="w-full max-w-md">

          <div className="p-6 md:p-10 bg-purple-400 rounded-lg shadow-lg">

            <h1 className="text-white text-2xl md:text-3xl mb-6">
              Login
            </h1>

            <form className="text-white space-y-4">

              <div>
                <label>Mobile Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  className="w-full bg-white text-black p-2 rounded mt-2 shadow"
                />
              </div>

              <div>
                <button
                  onClick={getHospitals}
                  className="w-full bg-purple-600 text-white p-2 rounded mb-4"
                >
                  Fetch Hospitals
                </button>

                <select
                  className="w-full border p-3 rounded mb-4"
                  onChange={(e) => setHospitalId(e.target.value)}
                >
                  <option>Select Hospital</option>

                  {hospitals?.map((hosp) => (
                    <option key={hosp.hospital_id} value={hosp.hospital_id}>
                      {hosp.hospital_name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Password</label>
                <input
                  type="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full bg-white text-black p-2 rounded mt-2 shadow"
                />
              </div>

              <p className="text-right text-sm cursor-pointer">
                Reset Password?
              </p>

            </form>

            <button onClick={handleLogin} className="w-full mt-6 bg-purple-700 hover:bg-purple-800 p-3 rounded text-white">
              Log in
            </button>

            <p className="text-white text-center mt-4">
              Or Login with QR Code
            </p>

            <div className="flex justify-center mt-3">
              <img
                src="./src/assets/qr.png"
                className="w-28 md:w-36"
                alt=""
              />
            </div>

          </div>


          <div className="flex flex-col md:flex-row justify-between text-sm mt-6 gap-2 text-center md:text-left">
            <h1>Version : 25.8.8</h1>
            <h1>grapeshms@gmail.com</h1>
            <h1>PROD-DB01</h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;