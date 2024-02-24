export interface InitialState {
    // jwtToken: any;
    isLoggedIn: boolean;
  }
  
  export interface SigninPayload {
    emailOrUsername: string;
    password: string;
  }
  
  export interface SignupPayload {
    email: string;
    username: string;
    password: string;
    passwordConfirmation: string;
  }