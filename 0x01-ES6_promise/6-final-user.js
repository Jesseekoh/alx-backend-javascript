import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((res) => (
      res.map((r) => ({
        status: r.status,
        value: r.status === 'fulfilled' ? r.value : String(r.reason),
      }))
    ));
}
