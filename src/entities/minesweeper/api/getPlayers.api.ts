import { api } from "shared/api"
import { MINESWEEPER_CRUD_PATH, apiDomain } from "shared/configs/api.config";
import { getPlayerResponse } from "./models";


export const fetchPlayers = async () => {
    try {
        const url = apiDomain + MINESWEEPER_CRUD_PATH;
        return (await api.get<getPlayerResponse[]>(url)).data;
    }
    catch (e) {
        throw e;
    }
}