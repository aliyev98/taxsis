import React, { useState } from 'react'
import CreateGroupModal from '../../modals/CreateGroupModal'

const GroupsHeader = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='groups-header d-flex align-items-center justify-content-between'>
      <div className="title">Qruplar</div>

      <button className="create-group d-flex align-items-center" onClick={() => setShowModal(true)}>
        <img src="/assets/plus-icon.svg" alt="" />
        <span>Qrup yarat</span>
      </button>

      <CreateGroupModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default GroupsHeader