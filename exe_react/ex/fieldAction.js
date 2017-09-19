//2
export function changeValue(e){
    console.log('====================================');
    console.log('change');
    console.log('====================================');

    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}