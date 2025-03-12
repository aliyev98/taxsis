import React from 'react'

const DataBaseTable = () => {

  const clmns = [
    { id: 1, content: 'No' },
    { id: 2, content: 'VÖEN' },
    { id: 3, content: 'Adı' },
    { id: 4, content: 'Tipi' },
    { id: 5, content: 'Vəziyyəti' },
    { id: 6, content: 'Qaimə tarixi' },
    { id: 7, content: 'Qaimə seriyası' },
    { id: 8, content: 'Qaimə nömrəsi' },
    { id: 9, content: 'Əsas qeyd' },
    { id: 10, content: 'Əsas qeyd' },
    { id: 11, content: 'Malın ƏDV - siz ümumi dəyəri' },
    { id: 12, content: 'Malın ƏDV məbləği' },
    { id: 14, content: 'ƏDV - yə cəlb edilən' },
    { id: 15, content: 'ƏDV - yə cəlb edilməyən' },
    { id: 16, content: 'ƏDV - dən azad olan' },
    { id: 17, content: 'ƏDV - yə “0” dərəcə ilə cəlb edilən' },
    { id: 18, content: 'Yol vergisi' },
    { id: 19, content: 'Aksiz məbləği' },
    { id: 20, content: 'Qaimə / Akt növləri' },
    { id: 21, content: 'Növ' },
    { id: 22, content: 'Təsnifat' },
  ]


  return (
    <div className='database-table'>

      <div className="table-header d-flex justify-content-between">

        <div className="title d-flex align-items-center">
          <div className='color'></div>
          <span>Alış qaimələri</span>
        </div>

        <div className="header-actions d-flex align-items-center">

          <div className="dropdown dropdown-menu-end d-flex justify-content-end">
            <button className="columns d-flex dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
              <span>Sütunlar</span>
              <img src="./assets/layout-icon.svg" alt="" />
            </button>

            <div className="dropdown-menu">
              <div className="dropdown-title">Sütunları seçin</div>

              <div className='items d-flex flex-column'>

                {
                  clmns.map((clmn) => (
                    <div key={clmn.id} className='item d-flex align-items-center'>
                      <div className="input-div">
                        <input type="checkbox" name="" id="" />
                      </div>
                      <span>{clmn.content}</span>
                    </div>
                  ))
                }

              </div>

            </div>
          </div>

          <button className='export'>Export</button>

        </div>

      </div>

      <div className="table-body">

        <table class="table bg-danger table-striped custom-table">

          <thead className='thead'>
            <tr>
              <th scope="col"><span>NO</span></th>
              <th scope="col">
                <div className='d-flex align-items-center'>
                  <span>Voen</span>
                  <img src="./assets/huni-icon.svg" alt="" />
                </div>
              </th>
              <th scope="col">
                <div className='d-flex align-items-center'>
                  <span>Adı</span>
                  <img src="./assets/huni-icon.svg" alt="" />
                </div>
              </th>
              <th scope="col">
                <div className='d-flex align-items-center'>
                  <span>Tipi</span>
                  <img src="./assets/huni-icon.svg" alt="" />
                </div>
              </th>
              <th scope="col">
                <div className='d-flex align-items-center'>
                  <span>Vəziyyəti</span>
                  <img src="./assets/huni-icon.svg" alt="" />
                </div>
              </th>
              <th scope="col">
                <div className='d-flex align-items-center'>
                  <span>Qaimə tarixi</span>
                  <img src="./assets/huni-icon.svg" alt="" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <th scope="row">1</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">1</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">4</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">5</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">6</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">7</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">8</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">9</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">10</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">11</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">12</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">13</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">14</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">15</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">16</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

            <tr>
              <th scope="row">17</th>
              <td>1406129621</td>
              <td>“ATS FOOD” MƏHDUD MƏSULİYYƏTLİ CƏMİYYƏTİ</td>
              <td>Cari</td>
              <td><span>Təstiqləndi</span></td>
              <td>01.12.2024</td>
            </tr>

          </tbody>

        </table>


      </div>




    </div>
  )
}

export default DataBaseTable