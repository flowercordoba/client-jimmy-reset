import { useState } from 'react';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { getUserByToken, login } from '../core/_requests';
import { useAuth } from '../core/Auth';
import { loginSchema } from '../scheme/schemes';

const initialValues = {
  username: '',
  password: '',
};

export function Login() {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const navigate = useNavigate(); // Hook para redirección


  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await login(values.username, values.password);
        saveAuth(auth);
        const { data: user } = await getUserByToken(auth.token);
        setCurrentUser(user);
        setSubmitting(false);
        setLoading(false);
        navigate('/dashboard'); // Redirigir al dashboard después del inicio de sesión

      } catch (error) {
        saveAuth(undefined);
        setStatus('The login details are incorrect');
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg" style={{ maxWidth: '900px', width: '100%' }}>
        <div className="">
          <div className="col-md-6 col-12">
            <div className="card-body p-10 p-md-5">
             
              <h3 className="card-subtitle text-left mb-4" style={{ fontSize: '2.3em' }}>
                <b>¡Bienvenido!</b>
              </h3>
         
    
              <form onSubmit={formik.handleSubmit} noValidate id="kt_login_signin_form">
                <div className="fv-row mb-4">
                  <input
                    placeholder="Ingresa tu username"
                    {...formik.getFieldProps('username')}
                    className={clsx(
                      'form-control bg-transparent',
                      { 'is-invalid': formik.touched.username && formik.errors.username },
                      { 'is-valid': formik.touched.username && !formik.errors.username }
                    )}
                    type="text"
                    name="username"
                    autoComplete="off"
                    style={{ padding: '12px', fontSize: '1.1em' }}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <div className="fv-plugins-message-container">
                      <span role="alert">{formik.errors.username}</span>
                    </div>
                  )}
                </div>
                <div className="fv-row mb-4">
                  <input
                    type="password"
                    autoComplete="off"
                    placeholder="Ingresa tu contraseña"
                    {...formik.getFieldProps('password')}
                    className={clsx(
                      'form-control bg-transparent',
                      { 'is-invalid': formik.touched.password && formik.errors.password },
                      { 'is-valid': formik.touched.password && !formik.errors.password }
                    )}
                    style={{ padding: '12px', fontSize: '1.1em' }}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{formik.errors.password}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="d-grid mb-4">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    className="btn btn-primary"
                    disabled={formik.isSubmitting || !formik.isValid}
                    style={{
                      backgroundColor: '#0beea6',
                      color: 'black',
                      padding: '12px',
                      fontSize: '1.1em'
                    }}
                  >
                    {!loading && <span className="indicator-label"><b>Ingresar</b></span>}
                    {loading && (
                      <span className="indicator-progress" style={{ display: 'block' }}>
                        Por favor espera...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                </div>
                <div className="text-center mt-4">
                  <span>¿No eres miembro todavía?</span> <Link to="/auth/registration" className="text-success">Registrarse</Link>
                </div>
              </form>
            </div>
          </div>
     
        </div>
      </div>
    </div>
  );
}
