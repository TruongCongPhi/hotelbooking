import ProfileModule from '@/modules/ProfileModule';

import useLanguage from '@/locale/useLanguage';

export default function Profile() {
  const entity = 'profile';
  const translate = useLanguage();

  const Labels = {
    PANEL_TITLE: translate('Hồ sơ'),
    ENTITY_NAME: translate('Hồ sơ'),
  };

  const config = {
    entity,
    ...Labels,
  };
  return <ProfileModule config={config} />;
}
