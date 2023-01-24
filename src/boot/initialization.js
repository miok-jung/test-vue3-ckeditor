import { Dark, LocalStorage } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(async () => {
  const darkMode = LocalStorage.getItem('darkMode');
  Dark.set(darkMode);
});
