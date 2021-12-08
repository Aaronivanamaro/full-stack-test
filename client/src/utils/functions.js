export function isValid (value) {
    if (value === null || 
        value === '' || 
        value === undefined || 
        value === [] ) {
            return false;
        }
    else {
        return true;
    }
}