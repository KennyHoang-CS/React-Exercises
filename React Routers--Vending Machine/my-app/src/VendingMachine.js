import React from 'react';
import './VendingMachine.css';
import Navlinks from './Navlinks';

const VendingMachine = () => {
    return (
        <div className="Vending-Machine">
            <div className="two-boxes">
                <div className="left-box">
                    HELLO I AM A VENDING MACHINE. WHAT DO YOU LIKE TO EAT?
                </div>
                <div className="right-box">
                    <Navlinks/>
                </div>
            </div>
        </div>
    )
}

export default VendingMachine;