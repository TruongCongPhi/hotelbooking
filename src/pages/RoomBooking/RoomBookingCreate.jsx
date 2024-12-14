import useLanguage from '@/locale/useLanguage';
import CreateRoomModule from '@/modules/RoomModule/CreateRoomModule';

export default function QuoteCreate() {
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
  return <CreateRoomModule config={configPage} />;
}
