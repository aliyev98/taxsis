import React from 'react'

const LeftSide = () => {
  return (
    <div className='feed-left-side'>

      <div className="linked-accounts d-flex flex-column">

        <div className="title">VEÖN-Ə BAĞLI HESABLAR</div>

        <div className="accounts-dropdown">

          <div className="dropdown-toggle d-flex align-items-center justify-content-between" role="button" data-bs-toggle="dropdown" aria-expanded="false">

            <div className="selected-account d-flex align-items-center">

              <div className="account-img">
                <img src="./assets/account-img1.png" alt="" />
              </div>

              <span className="account-name">ACCFIN Group</span>

              <div className="custom-icon">
                <img src="./assets/dropdown-icon.svg" alt="Dropdown Icon" />
              </div>

            </div>

          </div>

          <ul className="dropdown-menu">

            <div className="title">VEÖN-Ə BAĞLI HESABLAR</div>

            <div className="accounts">
              
              <li>
                <div className="account dropdown-item d-flex align-items-center">

                  <div className="account-img">
                    <img src="./assets/account-img1.png" alt="" />
                  </div>

                  <span className="account-name">ACCFIN Group</span>

                </div>
              </li>

              <li>
                <div className="account dropdown-item">

                  <div className="account-img">
                    <img src="./assets/account-img1.png" alt="" />
                  </div>

                  <span className="account-name"></span>

                </div>
              </li>

              <li>
                <div className="account dropdown-item">

                  <div className="account-img">
                    <img src="./assets/account-img1.png" alt="" />
                  </div>

                  <span className="account-name"></span>

                </div>
              </li>

            </div>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default LeftSide