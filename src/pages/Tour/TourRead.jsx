import useLanguage from '@/locale/useLanguage';
import ReadTourModule from '@/modules/TourModule/ReadTourModule';

export default function TourRead() {
  const translate = useLanguage();

  const entity = 'Tour';

  const Labels = {
    PANEL_TITLE: translate('Phòng'),
    DATATABLE_TITLE: translate('Danh sách phòng'),
    ADD_NEW_ENTITY: translate('Thêm mới phòng'),
    ENTITY_NAME: translate('Tour'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <ReadTourModule config={configPage} />;
}
