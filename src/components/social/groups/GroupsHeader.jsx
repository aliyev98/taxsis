import React, { useState } from 'react'
import CreateGroupModal from '../../modals/CreateGroupModal'
import AddButton from '../../ui/buttons/AddButton'

const GroupsHeader = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='groups-header d-flex align-items-center justify-content-between'>
      <div className="title">Qruplar</div>

      <AddButton content="Qrup yarat" onClick={() => setShowModal(true)} />

      <CreateGroupModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default GroupsHeader