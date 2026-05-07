import axios from "axios";
import type { Login, RegisterRequest } from "../../types/authTypes.ts";
import { ErrorObj } from "../../utils/errorObj.ts";

export const loginRequest = async (loginDto: Login): Promise<string> =>
    await axios.post(`http://localhost:3000/auth/login`, loginDto, { withCredentials: true })
        .then((res) => res.data)
        .catch((exc) => exc);

export const registerRequest = async (registerDto: RegisterRequest): Promise<void> => {
    try {
        await axios.post(`http://localhost:3000/auth/register`, registerDto);
    } catch (e) {
        if(axios.isAxiosError(e)) {
            throw new ErrorObj(
                e.response?.status ?? 500,
                e.response?.data?.message ?? 'Unknown error!',
            )
        }
        throw e;
    }
}

