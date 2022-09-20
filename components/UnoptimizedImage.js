import Image from 'next/image';

const unoptimizedLoader = ({ src }) => {
    return src;
}

export default function UnoptimizedImage(props) {
    return <Image {...props} loader={unoptimizedLoader} unoptimized />
}