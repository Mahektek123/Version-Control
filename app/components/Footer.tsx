import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLoaded } from '../redux/isLoadedSlice';
import { RootState } from '../redux/store';
import jq from 'jquery';

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

    if(isLoaded){
        jq(".footer").html("<h3>The page has fully loaded...</h3>")
    }

    return (
        <>
            <div className='footer'>
                
            </div>
        </>
    )
}

export default Footer