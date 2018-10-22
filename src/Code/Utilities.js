export function convertDataToFormData(data) {
    const formData = new FormData();
    for (let propertyName in data) {
        if (!data.hasOwnProperty(propertyName) || !data[propertyName]) continue;
        if (data[propertyName] instanceof Date)
            formData.append(propertyName, data[propertyName].toISOString());
        else if (data[propertyName] instanceof Array) {
            data[propertyName].forEach((element, index) => {
                const tempFormKey = `${propertyName}[${index}]`;
                convertDataToFormData(element, formData, tempFormKey);
            });
        }
        else if (typeof data[propertyName] === 'object' && !(data[propertyName] instanceof File))
            convertDataToFormData(data[propertyName], formData, propertyName);
        else
            formData.append(propertyName, data[propertyName].toString());
    }
    return formData;
}
export function clone(o) {
    return JSON.parse(JSON.stringify(o));
}