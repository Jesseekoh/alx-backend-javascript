export default function getListStudentIds(list) {
  const result = [];

  if (Array.isArray(list)) {
    list.map((item) => {
      result.push(item.id);
      return item.id;
    });
  }
  return result;
}
