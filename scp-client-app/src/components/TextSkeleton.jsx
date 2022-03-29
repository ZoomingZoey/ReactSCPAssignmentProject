// Creates a div that acts like an outline for text
// the size is the size of the letters in pixels
// the width is the size multiplied by how many characters are needed

const TextSkeleton = ({size, characterCount, className}) => {
  const styling = {
    height: size + 'px',
    maxWidth: (size * characterCount) + 'px'
  };
  return (
    <div className={`text-skeleton ${className}`} style={styling}></div>
  );
}
 
export default TextSkeleton;