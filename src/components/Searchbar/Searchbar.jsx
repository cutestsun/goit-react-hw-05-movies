import { useEffect } from 'react';
import { Field, Formik } from 'formik';
import { StyledForm } from './Searchbar.styled';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = ({ onQueryChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!movieName) return;

    onQueryChange(movieName);
  }, [movieName, onQueryChange]);

  const handleSubmit = (values, actions) => {
    const searchValue = values.search;

    const nextParams = searchValue !== '' ? { name: searchValue } : {};
    setSearchParams(nextParams);

    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <StyledForm>
          <Field type="text" name="search" required />
          <button type="submit"> Search</button>
        </StyledForm>
      </Formik>
    </>
  );
};
