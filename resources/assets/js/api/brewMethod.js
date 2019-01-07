import { ROAST_CONFIG } from '../config.js';
import Axios from 'axios';

export default{
    getBrewMethods:function(){
        return Axios.get(ROAST_CONFIG.API_URL+'/brew-methods');
    }
}