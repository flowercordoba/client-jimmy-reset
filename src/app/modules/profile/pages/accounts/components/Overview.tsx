import { Content } from '../../../../../../features/layout/components/content';
import Posts from '../../Post/Post';
import Publications from '../../Post/Publications';
import PersonalDetails from '../PersonalDetails';

export function Overview() {
  return (
    <Content>
      <div className='row cursor-pointer'>
        <div className='col-md-3'>
          <PersonalDetails />
        </div>
        <div className='col-md-9'>
          <Posts />
          <Publications />
    
        </div>
     
      </div>
    </Content>
  );
}
