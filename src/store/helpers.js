export const exist = (all, id) => {
  return all.find(city => city.id === id).length > 0;
}  