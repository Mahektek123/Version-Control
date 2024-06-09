"use client"
import { useEffect, useState } from 'react';
import $ from 'jquery';

export default function Home() {

  // const [version, setVersion] = useState<string>();

  // const dispatch = useDispatch();
  // const isLoaded = useSelector((state: RootState) => state.isLoaded);

  useEffect(() => {
    window.location.href = "/ab-test-card"
    $("title").text("AB Testing Card using Statsig")
  }, []);  

  

  return ;
}
