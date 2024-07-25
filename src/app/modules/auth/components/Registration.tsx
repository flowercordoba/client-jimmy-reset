import { useState, useEffect } from "react";
import { useFormik } from "formik";
import clsx from "clsx";
import { getUserByToken, register } from "../core/_requests";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../core/Auth";
import { registrationSchema } from "../scheme/schemes";
import { useThemeMode } from "../../../../features/partials";

const initialValues = {
  username: "",
  password: "",
  email: "",
  avatarColor: "blue",
  avatarImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA0gAAAMyAQMAAABtkHM/AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAAFiS0dEAf8CLd4AAABrSURBVBgZ7cGBAAAAAMOg+1NP4AjVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjgBSwwABwrL8wAAAAABJRU5ErkJggg==",
};

export function Registration() {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const navigate = useNavigate(); // Hook para redirección

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await register(
          values.username,
          values.password,
          values.email,
          values.avatarColor,
          values.avatarImage
        );
        saveAuth(auth);
        const { data: user } = await getUserByToken(auth.api_token);
        setCurrentUser(user);
        navigate('/dashboard'); // Redirigir al dashboard después del inicio de sesión

      } catch (error) {
        console.error(error);
        saveAuth(undefined);
        setStatus("The registration details are incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    // Initialize any components if necessary
  }, []);

  useEffect(() => {
    console.log("Formik values:", formik.values);
    console.log("Formik errors:", formik.errors);
    console.log("Formik isValid:", formik.isValid);
    console.log("Formik isSubmitting:", formik.isSubmitting);
  }, [formik.values, formik.errors, formik.isValid, formik.isSubmitting]);

  const { mode } = useThemeMode();
  const pageClass = clsx("landing-page rounded-3", {
    "dark-mode": mode === "dark",
  });

  return (
    <div className={pageClass}>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <form
              className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
              noValidate
              id="kt_login_signup_form"
              onSubmit={formik.handleSubmit}
            >
              {formik.status && (
                <div className="mb-lg-15 alert alert-danger">
                  <div className="alert-text font-weight-bold">
                    {formik.status}
                  </div>
                </div>
              )}

              {/* begin::Form group username */}
              <div className="fv-row mb-8">
                <input
                  placeholder="Username"
                  type="text"
                  autoComplete="off"
                  {...formik.getFieldProps("username")}
                  className={clsx(
                    "form-control bg-transparent",
                    {
                      "is-invalid":
                        formik.touched.username && formik.errors.username,
                    },
                    {
                      "is-valid":
                        formik.touched.username && !formik.errors.username,
                    }
                  )}
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert">{formik.errors.username}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* begin::Form group Email */}
              <div className="fv-row mb-8">
                <input
                  placeholder="Email"
                  type="email"
                  autoComplete="off"
                  {...formik.getFieldProps("email")}
                  className={clsx(
                    "form-control bg-transparent",
                    {
                      "is-invalid": formik.touched.email && formik.errors.email,
                    },
                    {
                      "is-valid": formik.touched.email && !formik.errors.email,
                    }
                  )}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert">{formik.errors.email}</span>
                    </div>
                  </div>
                )}
              </div>
              {/* end::Form group */}

              {/* begin::Form group Password */}
              <div className="fv-row mb-8" data-kt-password-meter="true">
                <div className="mb-1">
                  <div className="position-relative mb-3">
                    <input
                      type="password"
                      placeholder="Password"
                      autoComplete="off"
                      {...formik.getFieldProps("password")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.password && formik.errors.password,
                        },
                        {
                          "is-valid":
                            formik.touched.password && !formik.errors.password,
                        }
                      )}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert">{formik.errors.password}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-muted">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols.
                </div>
              </div>
              {/* end::Form group */}

              {/* begin::Form group */}
              <div className="text-center">
                <button
                  type="submit"
                  id="kt_sign_up_submit"
                  className="btn btn-lg btn-primary w-100 mb-5"
                >
                  {!loading && <span className="indicator-label">Enviar</span>}
                  {loading && (
                    <span
                      className="indicator-progress"
                      style={{ display: "block" }}
                    >
                      Por favor espere...{" "}
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  )}
                </button>
                <Link to="/auth/login">
                  <button
                    type="button"
                    id="kt_login_signup_form_cancel_button"
                    className="btn btn-lg btn-light-primary w-100 mb-5"
                  >
                    Cancelar
                  </button>
                </Link>
              </div>
              {/* end::Form group */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
