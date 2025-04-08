import React, { useState } from 'react';

const AccountSwitcher = () => {
    const accounts = [
        { id: 1, name: "Ulvin Omarov", username: "@ulvinomarv" },
        { id: 2, name: "Ilkin Memmedov", username: "@ilkin.mmdv" },
        { id: 3, name: "Ayten Aliyev", username: "@aytn.alyv" }
    ];

    const [selectedAccount, setSelectedAccount] = useState(accounts[0]);

    const handleAccountChange = (account) => {
        setSelectedAccount(account);
    };

    return (
        <div className="dropdown select-account-dropdown">
            <button
                className="btn dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <div className='user-infos d-flex flex-column'>
                    <span>
                        {selectedAccount.name}
                    </span>
                    <span>{selectedAccount.username}</span>
                </div>

                <img src="/assets/arrow-down.svg" alt="" />
            </button>

            <ul className="dropdown-menu">
                {
                    accounts.map(account => (
                        <li key={account.id}>
                            <button
                                className="dropdown-item d-flex align-items-center"
                                onClick={() => handleAccountChange(account)}
                            >
                                {account.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default AccountSwitcher;
