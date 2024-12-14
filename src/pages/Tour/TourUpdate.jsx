import useLanguage from '@/locale/useLanguage';
import UpdateTourModule from '@/modules/TourModule/UpdateTourModule';

export default function TourUpdate() {
  const translate = useLanguage();

  const entity = 'Tour';

  const Labels = {
    PANEL_TITLE: translate('Tour'),
    DATATABLE_TITLE: translate('Danh sách phòng'),
    ADD_NEW_ENTITY: translate('Thêm mới phòng'),
    ENTITY_NAME: translate('Tour'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <UpdateTourModule config={configPage} />;
}
