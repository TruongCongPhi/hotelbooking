import useLanguage from '@/locale/useLanguage';
import ReadRoomBookingModule from '@/modules/RoomBooking/ReadRoomBookingModule';

export default function RoomKookingRead() {
  const translate = useLanguage();

  const entity = 'roombooking';

  const Labels = {
    PANEL_TITLE: translate('Đặt phòng'),
    DATATABLE_TITLE: translate('Danh sách đặt phòng'),
    ADD_NEW_ENTITY: translate('Tạo đặt phòng'),
    ENTITY_NAME: translate('roombooking'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  return <ReadRoomBookingModule config={configPage} />;
}
