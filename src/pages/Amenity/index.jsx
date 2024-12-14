import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Amenity() {
  const translate = useLanguage();
  const entity = 'amenity';
  const searchConfig = {
    displayLabels: ['amenityName'],
    searchFields: 'amenityName',
  };

  const deleteModalLabels = ['name'];

  const Labels = {
    PANEL_TITLE: translate('Tiện ích phòng'),
    DATATABLE_TITLE: translate('Danh sách tiện ích phòng'),
    ADD_NEW_ENTITY: translate('Thêm tiện ích'),
    ENTITY_NAME: translate('amenity'),
  };
  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
  };
  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} />}
      config={config}
    />
  );
}
