export const renameObjectKey = (oldObject: any, oldKey: any, newKey: any) => {
  const keys = Object.keys(oldObject);

  return keys.reduce((newObject, key) => {
    if (key === oldKey) {
      newObject[newKey] = oldObject[oldKey];
    } else {
      newObject[key] = oldObject[key];
    }
    return newObject;
  }, {});
};
