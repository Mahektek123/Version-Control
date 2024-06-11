import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLoaded } from '../redux/isLoadedSlice';
import { RootState } from '../redux/store';

const Footer = () => {

    const dispatch = useDispatch();
    const isLoaded = useSelector((state: RootState) => state.isLoaded);
  
    useEffect(() => {
      const handleLoad = () => {
        dispatch(setLoaded());
      };
  
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }, [dispatch]);

    return (
        <>
            <div className='footer'>
                <h3>{isLoaded ? "The page has fully loaded..." : "Loading..."}</h3>
            </div>
        </>
    )
}

export default Footer