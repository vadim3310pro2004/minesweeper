

export * from './api/accounts.models';
export { 
    login, 
    registrate, 
    fetchUserData 
} from './api/accounts.api';


export { 
    accountsReducer, 
    unAuthotizate, 
} from './store/account.slice';