'use client';
import { Provider } from "react-redux";
import { store } from "./store";
import React, { ReactNode, useEffect } from 'react';
import Statsig from 'statsig-js';

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return <Provider store={store}>
        {children}
    </Provider>

}