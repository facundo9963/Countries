import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneCountry } from '../redux/actions';
import { useDispatch } from 'react-redux';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const CountryDetail = () => {
    const{ID}=useParams()
    
    const dispatch=useDispatch();
    React.useEffect(() => {
        dispatch(getOneCountry(ID))
    }, [dispatch,ID])
    
    const Country = useSelector(state => state.countryID)

    
    return (
        <div>
            <h1>{Country.name}</h1>
            <img src={Country.image} alt="imagen no encontrada" width ="300px" height="200px" />
            <span>{Country.continent} </span>
            <span>{Country.ID}</span>
            <span>{Country.subregion}</span>
            <span>{Country.area}</span>
            <span>{Country.population}</span>

          
        </div>
    );
};

export default CountryDetail;