import { Content } from '../../../../features/layout/components/content'
import { DetailsUser } from '../pages/accounts/DetailsUser'


export function Overview() {
  return (
    <Content>
      <div className='row g-5 g-xxl-8'>
        <div className='col-xl-6'>
          <DetailsUser className='mb-5 mb-xxl-8' />
        </div>

        <div className='col-xl-6'>
         AQUI MAS DETALLES
        </div>
      </div>
    </Content>
  )
}
