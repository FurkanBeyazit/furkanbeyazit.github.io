import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import en from './profile.en';
import ko from './profile.ko';
import type {Profile} from './types';

const profiles: Record<string, Profile> = {en, ko};

export default function useProfile(): Profile {
  const {i18n} = useDocusaurusContext();
  return profiles[i18n.currentLocale] ?? en;
}
