import ThumbnailSkeleton from "./ThumbnailSkeleton";
import TextSkeleton from "./TextSkeleton";

const ScpCardSkeleton = () => {
  return (
    <div>
      <ThumbnailSkeleton
        aspectRatio="1:1"
        className="mb-4"
        roundedClassName="rounded"
        shadowClassName="shadow"
        color="#adb5bd"
      />
      <TextSkeleton size={20} characterCount={4}/>
    </div>
  );
}
 
export default ScpCardSkeleton;