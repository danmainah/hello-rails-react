import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingsSuccess } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingsReducer.message);

  useEffect(() => {
    dispatch(getGreetingsSuccess());
  }, [dispatch]);

  return (
    <>
      <h3>
        <i>{greeting}</i>
      </h3>
    </>
  );
};

export default Greeting;
