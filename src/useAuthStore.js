import create from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: localStorage.getItem('token') ? true : false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
  login: (user, token, role) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    set({ isAuthenticated: true, user, token, role });
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    set({ isAuthenticated: false, user: null, token: null, role: null });
  },
}));

export default useAuthStore;
