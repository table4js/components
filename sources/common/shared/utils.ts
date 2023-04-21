export function isEmpty(obj: {}) {
    for (let key in obj) {
        return false;
    }
    return true;
}

export function isEqual(obj1: any, obj2: any) {
    if(Array.isArray(obj1) && Array.isArray(obj2)) {
        if(obj1.length === obj2.length) {
            for(var i = 0; i < obj1.length; i++) {
                if(obj1[i] !== obj2[i]) return false;
            }
            return true;
        }
        return false;
    }
    return obj1 === obj2;
}