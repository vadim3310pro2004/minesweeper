import axios from "axios";
import { apiDomain, refreshPath } from "shared/configs/api.config";
import { RefreshResponse } from "shared/models";
import { getAccessToken, removeAccessToken, setAccessToken } from "shared/services";


export const api = axios.create({
    baseURL: apiDomain,
});


api.interceptors.request.use(config => {
    const token = getAccessToken();

    if (token) {
        config.headers.Authorization = `JWT ${token}`;
    }

    return config;
});


api.interceptors.response.use(config => config, async (error) => {
    const originalConfig = error.config;
    
    if (error.response?.status === 401 && !originalConfig._isRetry) {
        originalConfig._isRetry = true;
        await refresh();

        return axios.request(originalConfig);
    }
    throw new Error(error);
});


const refresh = async () => {
    try {
        const response = await api.post<RefreshResponse>(
            refreshPath,
            {}, {
            withCredentials: true,
        });
        const token = response.data.access;

        if (token) {
            setAccessToken(token);
            
            return response;
        } else {
            removeAccessToken();
            
            throw new Error('Refresh response have not access token');
        }
    } catch (error: any) {
        removeAccessToken();
        throw new Error(error);
    }
}