import {useEffect} from 'react';
import {GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch';
import {useMap} from 'react-leaflet';
import 'leaflet-geosearch/assets/css/leaflet.css';
import {useDispatch} from "react-redux";
import {setMapValue} from "../redux/slice/CategorySlice.js";

const MapSearch = () => {
    const dispatch = useDispatch();
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
        provider: provider,
        style: 'bar'
    });

    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl);
        map.on('geosearch/showlocation', (results) => {
            const {location} = results;
            const {x,y} = location
            dispatch(setMapValue({
                lon:x,
                lat:y
            }))
            console.log(location)
        })
        return () => map.removeControl(searchControl);
    }, []);

    return null;
};
export default MapSearch;