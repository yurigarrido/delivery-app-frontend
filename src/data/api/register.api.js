import api from "./axios";


const registerUser = async (payload) => {
  const newUser = await api.post('/register', payload);
  const response = await newUser.json();
  return response;
};

export { registerUser };