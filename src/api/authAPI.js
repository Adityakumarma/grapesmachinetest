import axios from "axios";


export const fetchHospitals = async (phone) => {
  const res = await axios.post(
    `https://machinetest.grapesonline.net/api/Login/PreloginAuthentication?Phonenumber=${phone}`
  );
  return res.data;
};

export const loginUser = async (data) => {
  const res = await axios.post(`https://machinetest.grapesonline.net/api/Login/UserLogin`, data);
  return res.data;
};