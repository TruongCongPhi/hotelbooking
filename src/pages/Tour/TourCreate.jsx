import useLanguage from '@/locale/useLanguage';
import CreateTourModule from '@/modules/TourModule/CreateTourModule';

export default function TourCreate() {
  const translate = useLanguage();

  const entity = 'Tour';

  const Labels = {
    PANEL_TITLE: translate('Tour'),
    DATATABLE_TITLE: translate('Danh sách tour'),
    ADD_NEW_ENTITY: translate('Thêm tour'),
    ENTITY_NAME: translate('Tour'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <CreateTourModule config={configPage} />;
}
