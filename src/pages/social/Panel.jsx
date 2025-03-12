import React from 'react'
import DatabaseHeader from '../../layouts/PanelHeader'
import DataBaseSideBar from '../../components/social/panel/PanelSideBar'
import Database from '../../components/social/panel/Database'

const Panel = () => {
    return (
        <div className='panel-container d-flex'>

            <DataBaseSideBar />

            <div className="content d-flex flex-column">

                <DatabaseHeader />

                <Database/>

            </div>


        </div>
    )
}

export default Panel