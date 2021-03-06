import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingThunk } from '../redux/greetings/greetings';

export default function Greeting () {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getGreetingThunk())
      
    }, [dispatch])
    const greeting = useSelector(state => state.greetingReducer)
    return (
      <React.Fragment>
        <h1>
          Greetings: {greeting.greetings}
        </h1>
    </React.Fragment>
    )
   
};
