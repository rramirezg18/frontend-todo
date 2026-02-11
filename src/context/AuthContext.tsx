import { createContext, useContext, useState, useEffect, } from "react";
import type { ReactNode } from "react";

interface AuthContextType{
    token: string | null;
    role: string | null;
    isAuthenticated: boolean;
    login: (token: string, role: string) => void;
    logout: () => void;
}