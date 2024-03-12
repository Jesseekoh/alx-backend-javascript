export default function getStudentsByLocation(list, location) {
  return list.filter((item) => item.location === location);
}
