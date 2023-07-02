import { MutatingDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <MutatingDots
        height="100"
        width="100"
        color="#4252b7"
        secondaryColor="#4252b7"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrapper>
  );
};
