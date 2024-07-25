import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
  

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Acceso</span>
        </div>
      </div>

      <SidebarMenuItemWithSub
        to='/crafted/accounts'
        title='Cuenta'
        icon='profile-circle'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/crafted/pages/profile/feed' title='Mi cuenta' hasBullet={true} />
        {/* <SidebarMenuItem to='/crafted/account/settings' title='Configuracion' hasBullet={true} /> */}
      </SidebarMenuItemWithSub>


       <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div> 
       <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Apps'
        fontIcon='bi-chat-left'
        icon='message-text-2'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='grupos' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Comunidades' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Portales' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Blog' hasBullet={true} />
      </SidebarMenuItemWithSub> 

      {/* friend */}
       <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='Amigos'
        fontIcon='bi-layers'
      /> 

           {/* friend */}
           <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='Grupos'
        fontIcon='bi-layers'
      /> 

      
           {/* friend */}
           <SidebarMenuItem
        to='/apps/user-management/users'
        icon='abstract-28'
        title='Videos'
        fontIcon='bi-layers'
      /> 
    
    </>
  )
}

export {SidebarMenuMain}
