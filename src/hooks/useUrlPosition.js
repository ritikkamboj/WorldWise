/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
    const [searchParams, setSearchParams] = useSearchParams(); // its like useState hook, whcih also give array
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    console.log(lat, lng);
    return (
      [lat,lng]
    )
}

