export interface LoginResponse {
    is_loggedin:boolean,
    error_message:string,
    public_key:string,
    auth_token:string,
    customerid:string
  }