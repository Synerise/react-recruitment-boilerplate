export type User = {
    id: string | number;
    first_name?: string;
    last_name?: string;
    email?: string;
    gender?: string;
    role?: string;
  };
  
  export type UserListKeys = {
    [k in keyof User]: React.ReactNode;
  };
  