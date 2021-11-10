import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetingThunk } from '../redux/greetings/greetings';

export default function Greeting () {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getGreetingThunk())
      
    }, [dispatch])
    const greeting = useSelector(state => state.greetingReducer)
   console.log(greeting);
    return (
      <React.Fragment>
      Greetings: {greeting.greetings}
    </React.Fragment>
    )
   
};
