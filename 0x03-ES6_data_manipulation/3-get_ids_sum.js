export default function getStudentIdsSum(list) {
  return list.reduce((acc, obj) => acc + obj.id, 0);
}
