import { api } from "shared/api/base.api"
import { loginPath, registrationPath, userRetriveUpdateDeletePath } from "shared/configs/api.config";
import { setAccessToken } from "shared/services";
import { GetUserDataResponse, LoginRequest, LoginResponse, RegistrationRequest } from "./accounts.models";


export const login = async ({ email, password }: LoginRequest) => {
    try {
        const response = await api.post<LoginResponse>(
            loginPath,
            {
                email,
                password,
            }
        );
        setAccessToken(response.data.access);
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
}


export const registrate = async ({ email, password, name, confirmPassword }: RegistrationRequest) => {
    try {
        const response = await api.post<LoginResponse>(
            registrationPath,
            {
                email,
                name,
                password,
                re_password: confirmPassword,
            }
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
}


export const fetchUserData = async () => {
    try {
        const response = await api.get<GetUserDataResponse>(userRetriveUpdateDeletePath);
        return response;
    } catch (error: any) {
        throw new Error(error);
    }
}