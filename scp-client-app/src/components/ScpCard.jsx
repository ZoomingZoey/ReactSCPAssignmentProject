import { Image } from 'react-bootstrap';

const ScpCard = ({item, imageThumbnailSrc}) => {
  return (
    <div>
      <Image src='https://rdironworks.com/wp-content/uploads/2017/12/dummy-200x200.png' fluid className='rounded mb-2'/>
      <h5>{item}</h5>
    </div>
  );
}
 
export default ScpCard;