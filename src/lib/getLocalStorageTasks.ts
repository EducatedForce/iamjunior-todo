export const getLocalStorageTasks = () => {
  const storageData = localStorage.getItem("tasksIAJ");
  if (storageData) {
    try {
      const parsedData = JSON.parse(storageData);
      return Array.isArray(parsedData) ? parsedData : [];
    } catch {
      return [];
    }
  }
  return [];
};
