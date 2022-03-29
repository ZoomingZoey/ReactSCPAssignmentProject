import {
  Row,
  Col
} from 'react-bootstrap';

import ThumbnailSkeleton from './ThumbnailSkeleton';
import TextSkeleton from './TextSkeleton';

const ScpArticleSkeleton = () => {
  return (
    <>
      <Row className='mt-5'>
        <Col xs={12} md={6}>
          <TextSkeleton size={30} characterCount={4} className="mb-4 mt-3"/>
          <TextSkeleton size={25} characterCount={10} className="mt-4"/>
        </Col>
        <Col xs={12} md={6}></Col>
      </Row>
      <Row className='mt-3 mt-md-5 pb-5'>
        <Col xs={12} md={6} className="order-md-last mb-4">
          <div style={{maxWidth: "650px"}} className="mx-auto">
            <ThumbnailSkeleton
              aspectRatio="16:9"
              roundedClassName="rounded"
              shadowClassName="shadow-sm"
              color="#adb5bd"
            />
            <TextSkeleton size={15} characterCount={12} className="mt-3 mx-auto"/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <TextSkeleton size={15} characterCount={12} className="mb-2 mt-3"/>
          <TextSkeleton size={15} characterCount={12} className="mb-2"/>

          <TextSkeleton size={15} characterCount={15} className="mb-3 mt-4"/>
          <TextSkeleton size={15} characterCount={30} className="mb-2"/>
          <TextSkeleton size={15} characterCount={29} className="mb-2"/>
          <TextSkeleton size={15} characterCount={28} className="mb-2"/>
          <TextSkeleton size={15} characterCount={30} className="mb-2"/>
          <TextSkeleton size={15} characterCount={10} className="mb-2"/>

          <TextSkeleton size={15} characterCount={8} className="mb-3 mt-4"/>
          <TextSkeleton size={15} characterCount={30} className="mb-2"/>
          <TextSkeleton size={15} characterCount={29} className="mb-2"/>
          <TextSkeleton size={15} characterCount={28} className="mb-2"/>
          <TextSkeleton size={15} characterCount={29} className="mb-2"/>
          <TextSkeleton size={15} characterCount={30} className="mb-2"/>
          <TextSkeleton size={15} characterCount={29} className="mb-2"/>
          <TextSkeleton size={15} characterCount={28} className="mb-2"/>
          <TextSkeleton size={15} characterCount={30} className="mb-2"/>
          <TextSkeleton size={15} characterCount={10} className="mb-5"/>
        </Col>
      </Row>
    </>
  );
}
 
export default ScpArticleSkeleton;