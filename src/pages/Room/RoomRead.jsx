import useLanguage from '@/locale/useLanguage';
import ReadRoomModule from '@/modules/RoomModule/ReadRoomModule';

export default function RoomRead() {
  const translate = useLanguage();

  const entity = 'room';

  const Labels = {
    PANEL_TITLE: translate('Phòng'),
    DATATABLE_TITLE: translate('Danh sách phòng'),
    ADD_NEW_ENTITY: translate('Thêm mới phòng'),
    ENTITY_NAME: translate('room'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <ReadRoomModule config={configPage} />;
}
