import isNull from 'lodash/isNull';
import isNaN from 'lodash/isNaN';
import isUndefined from 'lodash/isUndefined';

function isValidLatLong(value){
    let isValid = false;
    if (isNull(value) && isNaN(value) && isUndefined(value)) {
        isValid = true;
    } else if (value === '-' || value === ''){
        isValid = true;
    } else  if (!isNull(value) && !isNaN(value) && !isUndefined(value)) {
        var float = value.toString();
        var floatregstr = /^[0-9\.]+$/;
        floatregstr = /^\d{0,8}(\.\d{1,2})?$/;
        floatregstr = /^-?\d+(?:[.,]\d*?)?$/;
        var result = -1;
        result = float.search(floatregstr);
        if (result !== "-1" && float !== ".") {
            isValid = true;
        }
    }
    
    return isValid;
}

export default isValidLatLong;
