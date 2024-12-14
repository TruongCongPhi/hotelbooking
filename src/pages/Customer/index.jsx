import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import { fields } from './config';

import useLanguage from '@/locale/useLanguage';

export default function Customer() {
  const translate = useLanguage();
  const entity = 'user';
  const searchConfig = {
    displayLabels: ['fullName'],
    searchFields: 'fullName',
  };

  const deleteModalLabels = ['name'];

  const Labels = {
    PANEL_TITLE: translate('Khách hàng'),
    DATATABLE_TITLE: translate('Người dùng'),
    ADD_NEW_ENTITY: translate('Thêm người dùng'),
    ENTITY_NAME: translate('user'),
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
