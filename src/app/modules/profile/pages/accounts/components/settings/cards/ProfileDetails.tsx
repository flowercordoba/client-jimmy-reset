import { useState, FC } from 'react'
import { toAbsoluteUrl } from '../../../../../../_metronic/helpers'
import { IProfileDetails, profileDetailsInitValues as initialValues } from '../SettingsModel'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required('First name is required'),
  lName: Yup.string().required('Last name is required'),
  company: Yup.string().required('Company name is required'),
  contactPhone: Yup.string().required('Contact phone is required'),
  companySite: Yup.string().required('Company site is required'),
  country: Yup.string().required('Country is required'),
  language: Yup.string().required('Language is required'),
  timeZone: Yup.string().required('Time zone is required'),
  currency: Yup.string().required('Currency is required'),
})

const ProfileDetails: FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues)
  const [loading, setLoading] = useState(false)

  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        values.communications.email = data.communications.email
        values.communications.phone = data.communications.phone
        values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Información general</li>
                <li className='list-group-item'>Empleo y formación</li>
                <li className='list-group-item'>Lugares de residencia</li>
                <li className='list-group-item'>Información básica y de contacto</li>
                <li className='list-group-item'>Familia y relaciones</li>
                <li className='list-group-item'>Información sobre ti</li>
                <li className='list-group-item'>Acontecimientos importantes</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-9'>
          <div className='card mb-5 mb-xl-10'>
            <div
              className='card-header border-0 cursor-pointer'
              role='button'
              data-bs-toggle='collapse'
              data-bs-target='#kt_account_profile_details'
              aria-expanded='true'
              aria-controls='kt_account_profile_details'
            >
              <div className='card-title m-0'>
                <h3 className='fw-bolder m-0'>Detalle del perfil</h3>
              </div>
            </div>

            <div id='kt_account_profile_details' className='collapse show'>
              <form onSubmit={formik.handleSubmit} noValidate className='form'>
                <div className='card-body border-top p-9'>
                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>Avatar</label>
                    <div className='col-lg-8'>
                      <div
                        className='image-input image-input-outline'
                        data-kt-image-input='true'
                        style={{ backgroundImage: `url(${toAbsoluteUrl('media/avatars/blank.png')})` }}
                      >
                        <div
                          className='image-input-wrapper w-125px h-125px'
                          style={{ backgroundImage: `url(${toAbsoluteUrl(data.avatar)})` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>Full Name</label>

                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-lg-6 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                            placeholder='First name'
                            {...formik.getFieldProps('fName')}
                          />
                          {formik.touched.fName && formik.errors.fName && (
                            <div className='fv-plugins-message-container'>
                              <div className='fv-help-block'>{formik.errors.fName}</div>
                            </div>
                          )}
                        </div>

                        <div className='col-lg-6 fv-row'>
                          <input
                            type='text'
                            className='form-control form-control-lg form-control-solid'
                            placeholder='Last name'
                            {...formik.getFieldProps('lName')}
                          />
                          {formik.touched.lName && formik.errors.lName && (
                            <div className='fv-plugins-message-container'>
                              <div className='fv-help-block'>{formik.errors.lName}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company</label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Company name'
                        {...formik.getFieldProps('company')}
                      />
                      {formik.touched.company && formik.errors.company && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.company}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required'>Contact Phone</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='tel'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Phone number'
                        {...formik.getFieldProps('contactPhone')}
                      />
                      {formik.touched.contactPhone && formik.errors.contactPhone && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.contactPhone}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required'>Company Site</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <input
                        type='text'
                        className='form-control form-control-lg form-control-solid'
                        placeholder='Company website'
                        {...formik.getFieldProps('companySite')}
                      />
                      {formik.touched.companySite && formik.errors.companySite && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.companySite}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='row mb-6'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>
                      <span className='required'>Country</span>
                    </label>

                    <div className='col-lg-8 fv-row'>
                      <select
                        className='form-select form-select-solid form-select-lg fw-bold'
                        {...formik.getFieldProps('country')}
                      >
                        <option value=''>Cuidad...</option>
                        <option value='AF'>Afghanistan</option>
                        <option value='AX'>Aland Islands</option>
                        <option value='AL'>Albania</option>
                        {/* Añade aquí el resto de las opciones */}
                      </select>
                      {formik.touched.country && formik.errors.country && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>{formik.errors.country}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Aquí puedes añadir más campos según necesites */}
                </div>

                <div className='card-footer d-flex justify-content-end py-6 px-9'>
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {!loading && 'Guardar cambios'}
                    {loading && (
                      <span className='indicator-progress' style={{ display: 'block' }}>
                        Please wait...{' '}
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProfileDetails }
