import React from 'react'
import FeedHeader from '../../layouts/FeedHeader'
import FeedSideBar from '../../sidebars/FeedSideBar'
import GroupsHeader from '../../components/social/groups/GroupsHeader'
import Group from '../../components/social/groups/Group'
import Input from '../../components/ui/inputs/Input'
import Select from '../../components/ui/inputs/Select'

const CurrencyPage = () => {

  const placeholders = [
    "Malın XİN MN kodi",
    "Malın adı",
    "İnvoys dəyəri (USD)",
    "Nəqliyyat xərci (USD)",
    "Digər xərclər (USD)",
    "İmtiyaz",
  ];

  const formFields = [
    { type: 'input', placeholder: "Malın XİN MN kodi" },
    { type: 'select', placeholder: "Prosedur", options: ["A", "B", "C"] },
    { type: 'input', placeholder: "Malın adı" },
    { type: 'input', placeholder: "İnvoys dəyəri (USD)" },
    { type: 'input', placeholder: "Nəqliyyat xərci (USD)" },
    { type: 'input', placeholder: "Digər xərclər (USD)" },
    { type: 'input', placeholder: "İmtiyaz" },
  ];

  const resultItems = [
    { label: "İdxal gömrük rüsumu", value: "0 AZN" },
    { label: "ƏDV", value: "0 AZN" },
    { label: "Aksiz", value: "0 AZN" },
    { label: "Gömrük rüsumları", value: "0 AZN" },
    { label: "Vəsiqə üçün gömrük yığımı", value: "0 AZN" },
    { label: "Elektron gömrük xidməti haqqı", value: "0 AZN" },
    { label: "Elektron gömrük xidməti haqqı", value: "0 AZN" },
  ];



  return (
    <div className='calculator-page-container'>

      <FeedHeader />

      <div className="social-wrapper d-flex">

        <FeedSideBar />

        <div className="content d-flex justify-content-center align-items-center">

          <div className="calculator-container d-flex flex-column">


            <div className="calculator d-flex flex-column">

              <div className="title">Gömrük kalkulyatoru</div>

              <div className="infos-and-results d-flex">

                <div className="goods-infos d-flex flex-column">

                  <div className="infos-title">
                    Mal barədə məlumat
                  </div>

                  <div className="inputs d-flex flex-column">

                    {formFields.map((field, index) => {
                      if (field.type === 'input') {
                        return <Input key={index} placeholder={field.placeholder} />;
                      } else if (field.type === 'select') {
                        return <Select key={index} options={field.options} placeholder={field.placeholder} />;
                      }
                      return null;
                    })}

                    <div className="checkbox-div d-flex">
                      <input type="checkbox" name="" id="" />
                      <span>Azad ticarət sazişi bağlanan ölkədə istehsal olunub və oradan gətirilir</span>
                    </div>

                  </div>

                  <div className="form-actions d-flex align-items-center">
                    <button className="btn btn-primary calculate">
                      Hesabla
                    </button>
                    <button className="clear">
                      Təmizlə
                    </button>
                  </div>

                  <div className="information d-flex align-items-center">

                    <img src="/assets/info-icon-blue.svg" alt="" />

                    <div className="info-text">
                      Malların gömrük dəyəri <span>“Gömrük tarifi haqqında”</span> Azərbaycan Respublikasının qanunu və <span>Gömrük dəyərinin müəyyən edilməsinin vahid metodikası” </span>“əsasında müəyyən edilir.
                    </div>

                  </div>

                </div>

                <div className="results d-flex flex-column">

                  <div className="results-title">
                    Nəticə
                  </div>

                  <div className="inputs d-flex flex-column">
                    {resultItems.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className='d-flex justify-content-between'>
                          <span>{item.label}</span>
                          <span>{item.value}</span>
                        </div>
                        <div className="line"></div>
                      </React.Fragment>
                    ))}
                  </div>


                  <div className="result d-flex flex-column">

                    <div className=' d-flex justify-content-between'>
                      <span>Cəmi gömrük ödənişləri</span>
                      <span>0 AZN</span>
                    </div>

                    <div className="line"></div>

                    <span>
                      Gömrük dəyəri = 0 AZN * <br />
                      * Gömrük dəyəri = (İnvoys dəyəri +Nəqliyyat xərci + Digər xərclər) * USD kursu
                    </span>

                  </div>

                  <div className="information d-flex align-items-center">

                    <img src="/assets/info-icon-blue.svg" alt="" />

                    <div className="info-text">
                      Diqqət! Gömrük ödənişləri daxil edilmiş məlumatlar əsasında hesablanmışdır. Gömrük rəsmiləşdirilməsi zamanı malların gömrük dəyərinin müəyyənləşdirilməsi üsulundan asılı olaraq cəmi gömrük ödənişlərində fərqlər yarana bilər.
                    </div>

                  </div>

                </div>

              </div>



            </div>

          </div>

        </div>


      </div>

    </div>
  )
}

export default CurrencyPage