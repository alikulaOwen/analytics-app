import axios from 'axios';
import { Jwt } from '../Models/token';
import { LoginUser } from '../Models/loginUser';

const login = async (
  user: LoginUser
): Promise<{ jwt: Jwt }> => {
  console.log(user)

  const response = await axios.post(
    `https://apiv2.duhqa.com/api/v1.0/Auth/Authentication`,
    user,
  {headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          }}
  );
  
 
  if (response.data) {
    localStorage.setItem('jwt', JSON.stringify(response.data));
    console.log(localStorage.getItem('jwt'))
    return { jwt: response.data};
  }

  return { jwt: null };
};

const logout = (): void => {
  localStorage.removeItem('jwt');
};



const authService = {
  login,
  logout,
};

export default authService;