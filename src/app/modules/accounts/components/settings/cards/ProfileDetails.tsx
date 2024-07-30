import { useState, FC } from "react";
import {
  IProfileDetails,
  profileDetailsInitValues as initialValues,
} from "../SettingsModel";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toAbsoluteUrl } from "../../../../../../features/helpers";

const profileDetailsSchema = Yup.object().shape({
  fName: Yup.string().required("First name is required"),
  lName: Yup.string().required("Last name is required"),
  company: Yup.string().required("Company name is required"),
  contactPhone: Yup.string().required("Contact phone is required"),
  companySite: Yup.string().required("Company site is required"),
  country: Yup.string().required("Country is required"),
  language: Yup.string().required("Language is required"),
  timeZone: Yup.string().required("Time zone is required"),
  currency: Yup.string().required("Currency is required"),
});

const ProfileDetails: FC = () => {
  const [data, setData] = useState<IProfileDetails>(initialValues);
  const updateData = (fieldsToUpdate: Partial<IProfileDetails>): void => {
    const updatedData = Object.assign(data, fieldsToUpdate);
    setData(updatedData);
  };

  const [loading, setLoading] = useState(false);
  const formik = useFormik<IProfileDetails>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true);
      setTimeout(() => {
        values.communications.email = data.communications.email;
        values.communications.phone = data.communications.phone;
        values.allowMarketing = data.allowMarketing;
        const updatedData = Object.assign(data, values);
        setData(updatedData);
        setLoading(false);
      }, 1000);
    },
  });

  return (
    <div className="card mb-5 mb-xl-10">
      <div
        className="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_profile_details"
        aria-expanded="true"
        aria-controls="kt_account_profile_details"
      >
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Detalle de la cuenta</h3>
        </div>
      </div>

      <div id="kt_account_profile_details" className="collapse show">
        <form onSubmit={formik.handleSubmit} noValidate className="form">
          <div className="card-body border-top p-9">
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label fw-bold fs-6">
                Avatar
              </label>
              <div className="col-lg-8">
                <div
                  className="image-input image-input-outline"
                  data-kt-image-input="true"
                  style={{
                    backgroundImage: `url(${toAbsoluteUrl(
                      "media/avatars/blank.png"
                    )})`,
                  }}
                >
                  <div
                    className="image-input-wrapper w-125px h-125px"
                    style={{
                      backgroundImage: `url(${toAbsoluteUrl(data.avatar)})`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fw-bold fs-6">
                Full Name
              </label>

              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                      placeholder="First name"
                      {...formik.getFieldProps("fName")}
                    />
                    {formik.touched.fName && formik.errors.fName && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          {formik.errors.fName}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="col-lg-6 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Last name"
                      {...formik.getFieldProps("lName")}
                    />
                    {formik.touched.lName && formik.errors.lName && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          {formik.errors.lName}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-6">
              <label className="col-lg-4 col-form-label fw-bold fs-6">
                <span className="required">Contact Phone</span>
              </label>

              <div className="col-lg-8 fv-row">
                <input
                  type="tel"
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Phone number"
                  {...formik.getFieldProps("contactPhone")}
                />
                {formik.touched.contactPhone && formik.errors.contactPhone && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      {formik.errors.contactPhone}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-6">
              <label className="col-lg-4 col-form-label fw-bold fs-6">
                <span className="required">Company Site</span>
              </label>

              <div className="col-lg-8 fv-row">
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Company website"
                  {...formik.getFieldProps("companySite")}
                />
                {formik.touched.companySite && formik.errors.companySite && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      {formik.errors.companySite}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-6">
              <label className="col-lg-4 col-form-label fw-bold fs-6">
                <span className="required">Country</span>
              </label>

              <div className="col-lg-8 fv-row">
                <select
                  className="form-select form-select-solid form-select-lg fw-bold"
                  {...formik.getFieldProps("country")}
                >
                  <option value="">Seleccionar cuidad...</option>

                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">Venezuela, Bolivarian Republic of</option>
                  <option value="VN">Vietnam</option>
                  <option value="VI">Virgin Islands</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </select>
                {formik.touched.country && formik.errors.country && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">{formik.errors.country}</div>
                  </div>
                )}
              </div>
            </div>

            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fw-bold fs-6">
                Language
              </label>
              <div className="col-lg-8 fv-row">
                <select
                  className="form-select form-select-solid form-select-lg"
                  {...formik.getFieldProps("language")}
                >
                  <option value="">Selecionar idioma...</option>
                  <option value="id">Bahasa Indonesia - Indonesian</option>
                  <option value="msa">Bahasa Melayu - Malay</option>
                  <option value="ca">Català - Catalan</option>
                  <option value="cs">Čeština - Czech</option>
                  <option value="da">Dansk - Danish</option>
                  <option value="de">Deutsch - German</option>
                  <option value="en">English</option>
                  <option value="en-gb">English UK - British English</option>
                  <option value="es">Español - Spanish</option>
                </select>
                {formik.touched.language && formik.errors.language && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      {formik.errors.language}
                    </div>
                  </div>
                )}

                <div className="form-text">
                  Please select a preferred language, including date, time, and
                  number formatting.
                </div>
              </div>
            </div>

            <div className="row mb-6">
              <label className="col-lg-4 col-form-label fw-bold fs-6">
                Communication
              </label>

              <div className="col-lg-8 fv-row">
                <div className="d-flex align-items-center mt-3">
                  <label className="form-check form-check-inline form-check-solid me-5">
                    <input
                      className="form-check-input"
                      name="communication[]"
                      type="checkbox"
                      defaultChecked={data.communications?.email}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: !data.communications?.email,
                            phone: data.communications?.phone,
                          },
                        });
                      }}
                    />
                    <span className="fw-bold ps-2 fs-6">Email</span>
                  </label>

                  <label className="form-check form-check-inline form-check-solid">
                    <input
                      className="form-check-input"
                      name="communication[]"
                      type="checkbox"
                      defaultChecked={data.communications?.phone}
                      onChange={() => {
                        updateData({
                          communications: {
                            email: data.communications?.email,
                            phone: !data.communications?.phone,
                          },
                        });
                      }}
                    />
                    <span className="fw-bold ps-2 fs-6">Phone</span>
                  </label>
                </div>
              </div>
            </div>

          </div>

          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {!loading && "Save Changes"}
              {loading && (
                <span
                  className="indicator-progress"
                  style={{ display: "block" }}
                >
                  Please wait...{" "}
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>


      
    </div>
  );
};

export { ProfileDetails };
