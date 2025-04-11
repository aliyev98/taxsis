import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import TaxModuleTable from '../../components/tables/TaxModuleTable'


const ColleaguesPage = () => {

  const columns = [
    {
      id: "no", accessorKey: "no", header: "No",
      filterOptions: {
        search: true,
        type: "search",
      },
    },
    {
      id: "name", accessorKey: "name", header: "Əməkdaşın adı, soyadı",
      filterOptions: {
        search: true,
        type: "search",
      },
    },
    {
      id: "duty", accessorKey: "duty", header: "Vəzifəsi",
      filterOptions: {
        search: true,
        type: "search",
      },
    },

  ]

  const data = [
    { no: 1, name: "1406129621", duty: "“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ"},
    { no: 2, name: "1406129621", duty: "“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ"},
    { no: 3, name: "1406129621", duty: "“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ"},
    { no: 4, name: "1406129621", duty: "“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ"},
    { no: 5, name: "1406129621", duty: "“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ"},
  ];


  return (
    <div className='colleagues-page-container'>

      <FeedHeader />

      <div className="social-wrapper d-flex">

        <FeedSideBar />

        <div className="content d-flex justify-content-center">

          <div className="colleagues-container d-flex flex-column">


            <div className="colleagues d-flex flex-column">

              <div className="colleagues-header d-flex justify-content-between align-items-center">
                <span>Əməkdaşlar</span>

                <button className="btn btn-add-colleagues d-flex align-items-center">
                  <img src="/assets/plus-icon.svg" alt="" />
                  <span>Əməkdaş əlavə et</span>
                </button>
              </div>

              <div className="colleagues-body">
                <TaxModuleTable columns={columns} data={[]} />
              </div>

            </div>

          </div>

        </div>


      </div>

    </div>
  )
}

export default ColleaguesPage