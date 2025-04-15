import React from "react";

const LinkedAccountsDropdown = ({ accounts = [], onSelect }) => {
    return (
        <div className="linked-account-dropdown d-flex flex-column">
            {accounts.map((account, index) => (
                <React.Fragment key={index}>
                    <div
                        className="dropdown-item d-flex align-items-center"
                        onClick={() => onSelect(account)}
                    >
                        <div className="account-img">
                            <img src={account.img} alt="" />
                        </div>

                        <span className="account-name">{account.name}</span>
                    </div>

                    {index !== accounts.length - 1 && <div className="line" />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default LinkedAccountsDropdown;
