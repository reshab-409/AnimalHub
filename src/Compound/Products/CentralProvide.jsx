import { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);


    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };



    //   2
    const openPopup1 = () => {
        setIsOpen1(true);
    };

    const closePopup1 = () => {
        setIsOpen1(false);
    };




    //   3
    const openPopup2 = () => {
        setIsOpen2(true);
    };

    const closePopup2 = () => {
        setIsOpen2(false);
    };


    //   4
    const openPopup3 = () => {
        setIsOpen3(true);
    };

    const closePopup3 = () => {
        setIsOpen3(false);
    };



    //   5
    const openPopup4 = () => {
        setIsOpen4(true);
    };

    const closePopup4 = () => {
        setIsOpen4(false);
    };

    return (
        <PopupContext.Provider value={{ isOpen, isOpen1, isOpen2, isOpen3, isOpen4, openPopup, closePopup, openPopup1, closePopup1, openPopup2, closePopup2, openPopup3, closePopup3, openPopup4, closePopup4 }}>
            {children}
        </PopupContext.Provider>
    );
};

export const usePopup = () => {
    return useContext(PopupContext);
};
