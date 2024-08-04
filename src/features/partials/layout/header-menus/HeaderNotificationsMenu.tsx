import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { KTIcon, toAbsoluteUrl } from '../../../helpers';

import { socketService } from '../../../../shared/services/socket.service';
import { fetchNotifications, markNotificationAsRead, deleteNotification } from '../../../../app/modules/notifications/acctions/notificationActions';
import { selectNotifications, selectNotificationLoading, selectNotificationError } from '../../../../store/selectors/notificationSelectors';

const HeaderNotificationsMenu: FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotifications);
  const loading = useSelector(selectNotificationLoading);
  const error = useSelector(selectNotificationError);

  console.log(loading, error);

  useEffect(() => {
    console.log('Dispatching fetchNotifications');
    dispatch(fetchNotifications());
    socketService.setupSocketConnection();
  }, [dispatch]);

  useEffect(() => {
    console.log('Notifications:', notifications);
  }, [notifications]);

  const handleMarkAsRead = (id: string) => {
    dispatch(markNotificationAsRead(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteNotification(id));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {}</div>;

  if (!Array.isArray(notifications)) return <div>No notifications available</div>;

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px'
      data-kt-menu='true'
    >
      <div
        className='d-flex flex-column bgi-no-repeat rounded-top'
        style={{ backgroundImage: `url('${toAbsoluteUrl('media/misc/menu-header-bg.jpg')}')` }}
      >
        <h3 className='text-white fw-bold px-9 mt-10 mb-6'>
          Notificaciones <span className='fs-8 opacity-75 ps-3'>24 </span>
        </h3>

        <ul className='nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9'>
          <li className='nav-item'>
            <a
              className='nav-link text-white opacity-75 opacity-state-100 pb-4'
              data-bs-toggle='tab'
              href='#kt_topbar_notifications_1'
            >
              Todas
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link text-white opacity-75 opacity-state-100 pb-4 active'
              data-bs-toggle='tab'
              href='#kt_topbar_notifications_2'
            >
              Sin leer
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link text-white opacity-75 opacity-state-100 pb-4'
              data-bs-toggle='tab'
              href='#kt_topbar_notifications_3'
            >
              Leídas
            </a>
          </li>
        </ul>
      </div>

      <div className='tab-content'>
        <div className='tab-pane fade' id='kt_topbar_notifications_1' role='tabpanel'>
          <div className='scroll-y mh-325px my-5 px-8'>
            {notifications.map((notification, index) => (
              <div key={`notification${index}`} className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-35px me-4'>
                    <span className='symbol-label bg-light-primary'>
                      <KTIcon iconName='notification' className='fs-2 text-primary' />
                    </span>
                  </div>
                  <div className='mb-0 me-2'>
                    <a href='#' className='fs-6 text-gray-800 text-hover-primary fw-bolder'>
                      {notification.title}
                    </a>
                    <div className='text-gray-500 fs-7'>{notification.description}</div>
                  </div>
                </div>
                <span className='badge badge-light fs-8'>{notification.time}</span>
                <button onClick={() => handleMarkAsRead(notification.id)}>Marcar como leído</button>
                <button onClick={() => handleDelete(notification.id)}>Eliminar</button>
              </div>
            ))}
          </div>
        </div>

        <div className='tab-pane fade show active' id='kt_topbar_notifications_2' role='tabpanel'>
          {notifications.filter(n => !n.read).map((notification, index) => (
            <div key={`notification${index}`} className='d-flex flex-stack py-4'>
              <div className='d-flex align-items-center'>
                <div className='symbol symbol-35px me-4'>
                  <span className='symbol-label bg-light-primary'>
                    <KTIcon iconName='notification' className='fs-2 text-primary' />
                  </span>
                </div>
                <div className='mb-0 me-2'>
                  <a href='#' className='fs-6 text-gray-800 text-hover-primary fw-bolder'>
                    {notification.title}
                  </a>
                  <div className='text-gray-500 fs-7'>{notification.description}</div>
                </div>
              </div>
              <span className='badge badge-light fs-8'>{notification.time}</span>
              <button onClick={() => handleMarkAsRead(notification.id)}>Marcar como leído</button>
              <button onClick={() => handleDelete(notification.id)}>Eliminar</button>
            </div>
          ))}
        </div>

        <div className='tab-pane fade' id='kt_topbar_notifications_3' role='tabpanel'>
          <div className='scroll-y mh-325px my-5 px-8'>
            {notifications.filter(n => n.read).map((notification, index) => (
              <div key={`notification${index}`} className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center me-2'>
                  <span className='symbol-label bg-light-primary'>
                    <KTIcon iconName='notification' className='fs-2 text-primary' />
                  </span>

                  <a href='#' className='text-gray-800 text-hover-primary fw-bold'>
                    {notification.title}
                  </a>

                  <span className='badge badge-light fs-8'>{notification.time}</span>
                </div>
                <button onClick={() => handleMarkAsRead(notification.id)}>Marcar como leído</button>
                <button onClick={() => handleDelete(notification.id)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div className='py-3 text-center border-top'>
            <Link
              to='/crafted/pages/profile'
              className='btn btn-color-gray-600 btn-active-color-primary'
            >
              Ver todas <KTIcon iconName='arrow-right' className='fs-5' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderNotificationsMenu };
