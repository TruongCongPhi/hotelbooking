import { ErpLayout } from '@/layout';
import CreateItem from '@/modules/ErpPanelModule/CreateItem';
import RoomForm from '../Forms/RoomForm';

export default function CreateRoomModule({ config, withUpload = true }) {
  return (
    <ErpLayout>
      <CreateItem config={config} withUpload={withUpload} CreateForm={RoomForm} />
    </ErpLayout>
  );
}
