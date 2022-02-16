import React, { useState, createContext, useContext } from 'react';

interface Progress {
    numberCard: number,
    changeNumber: (numberCard: number) => void
}
const ProgressDefault = {
    numberCard: 1,
    changeNumber: () => {}
}
const ProgressContext = createContext<Progress>(ProgressDefault);

export const Provider: React.FC = ({children}) => {

    const [numberCard, setNumberCard] = useState(1);
    const changeNumber = (numberCard: number) => setNumberCard(numberCard)
    return (
    <ProgressContext.Provider value = {{numberCard, changeNumber}}>
        {children}
    </ProgressContext.Provider>
    )
}

export const useProgressContext = () => useContext(ProgressContext)