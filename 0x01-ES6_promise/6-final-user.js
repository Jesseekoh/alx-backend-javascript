import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, filename) => {
  const result = [];
  try {
    const user = await signUpUser(firstName, lastName);
    result.push({
      status: 'success',
      value: user,
    });
    await uploadPhoto();
  } catch (error) {
    result.push({
      status: 'rejected',
      value: `Error: ${filename} cannot be processed`,
    });
  }
};

export default handleProfileSignup;
