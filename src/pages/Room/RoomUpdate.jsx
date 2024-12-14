import useLanguage from '@/locale/useLanguage';
import UpdateRoomModule from '@/modules/roomModule/UpdateRoomModule';

export default function RoomUpdate() {
  const translate = useLanguage();

  const entity = 'room';

  const Labels = {
    PANEL_TITLE: translate('room'),
    DATATABLE_TITLE: translate('Danh sách phòng'),
    ADD_NEW_ENTITY: translate('Thêm mới phòng'),
    ENTITY_NAME: translate('room'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <UpdateRoomModule config={configPage} />;
}
