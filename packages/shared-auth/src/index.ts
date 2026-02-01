export interface User {
  id: string;
  username: string;
  roles: string[];
}

export const AuthService = {
  login: () => {
    console.log('Login logic here');
    return { id: '1', username: 'admin', roles: ['admin'] };
  },
  logout: () => {
    console.log('Logout logic here');
  }
};
