import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import * as auth from '../services/auth';
import delay from '../utils/delay';
import api from '../services/api';

interface User {
  name: string
  email: string
}

interface AuthContextData {
  signed: boolean | null
  user: User | null
  signIn(): Promise<void>
  signOut(): void
  loading: boolean
  loadingApp: boolean
}
const AuthContext = createContext<AuthContextData>({ } as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingApp, setLoadingApp] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@ProffyAuth:user');
      const storagedToken = await AsyncStorage.getItem('@ProffyAuth:token');  

      await delay(2000);
      if(storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      }
      setLoadingApp(false);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn() {
    setLoading(true);
    const response = await auth.signIn();
    setUser(response.user);

    api.defaults.headers.Authorization = `Bearer ${response.token}`;

    await AsyncStorage.setItem('@ProffyAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@ProffyAuth:token', response.token);

    setLoading(false);
  }

  async function signOut() {
    try {
      await AsyncStorage.clear();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, signIn, signOut, user, loading, loadingApp }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}