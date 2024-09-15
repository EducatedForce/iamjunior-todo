export const generateId = () => {
  return `task-${Date.now().toString().slice(-6)}`;
};
