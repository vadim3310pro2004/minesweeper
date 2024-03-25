
import { api } from "shared/api";
import { 
    MINESWEEPER_CRUD_PATH,
    apiDomain, 
} from "shared/configs/api.config";
import { 
    sendNewLoseRequest,
    sendNewLoseResponse,
    sendNewVictoryRequest, 
    sendNewVictoryResponse 
} from "./models";


export const sendNewVictory = async (
    { time, id }: sendNewVictoryRequest
): Promise<sendNewVictoryResponse> => {
    const url = `${apiDomain}${MINESWEEPER_CRUD_PATH}${id}/`;
    const data = {
        time,
    };

    try {
        return await api.patch(url, data);
    } catch (e) {
        throw e;
    }
};


export const sendNewLose = async (
    { id }: sendNewLoseRequest
): Promise<sendNewLoseResponse> => {
    const url = `${apiDomain}${MINESWEEPER_CRUD_PATH}${id}/`;
    const data = {
    };

    try {
        return await api.patch(url, data);
    } catch (e) {
        throw e;
    }
};