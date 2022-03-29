// Import components
import ScpCard from 'components/ScpCard';
import ScpCardSkeleton from 'components/ScpCardSkeleton';

const ScpCardGrid = ({subjects, skeletonCount}) => {
  return (
    <div className='grid-container mx-auto'>
      {subjects.length > 0 ?
        subjects.map((subject) => (
          <ScpCard key={subject.item} item={subject.item} imageFilename={subject.image_filename}/>
        ))
        : [...Array(skeletonCount ? skeletonCount : 5).keys()].map((item) => <ScpCardSkeleton key={item}/>)
      }
    </div>
  );
}
 
export default ScpCardGrid;