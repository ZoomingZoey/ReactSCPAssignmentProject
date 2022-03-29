import ThumbnailImage from "./ThumbnailImage";
import { Link } from 'react-router-dom';

const ScpCard = ({item, imageFilename}) => {
  return (
    <div>
      <Link key={item} className="scp-card-link" to={`/scps/${item.replace('SCP-', '')}`}>
        <ThumbnailImage
          aspectRatio="1:1"
          containerClassNames="mb-3"
          imageClassNames="scp-card-image shadow rounded"
          imageSrc={`http://localhost:3001/images/${imageFilename ? imageFilename : 'image_unavailable.jpg'}`}
        />
        <h5>{item}</h5>
      </Link>
    </div>
  );
}
 
export default ScpCard;