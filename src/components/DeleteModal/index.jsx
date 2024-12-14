import { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { crud } from '@/redux/crud/actions';
import { useCrudContext } from '@/context/crud';
import { useAppContext } from '@/context/appContext';
import { selectDeletedItem } from '@/redux/crud/selectors';
import { valueByString } from '@/utils/helpers';

import useLanguage from '@/locale/useLanguage';

export default function DeleteModal({ config }) {
  const translate = useLanguage();
  let {
    entity,
    deleteModalLabels,
    deleteMessage = translate('Bạn có chắc chắn muốn xóa:'),
    modalTitle = translate('Xác nhận xóa'),
  } = config;
  const dispatch = useDispatch();
  const { current, isLoading, isSuccess } = useSelector(selectDeletedItem);
  const { state, crudContextAction } = useCrudContext();
  const { appContextAction } = useAppContext();
  const { panel, readBox } = crudContextAction;
  const { navMenu } = appContextAction;
  const { isModalOpen } = state;
  const { modal } = crudContextAction;
  const [displayItem, setDisplayItem] = useState('');

  useEffect(() => {
    if (isSuccess) {
      console.log('🚀 ~ useEffect ~ DeleteModal isSuccess:', isSuccess);
      modal.close();
      dispatch(crud.list({ entity }));
      // dispatch(crud.resetAction({actionType:"delete"})); // check here maybe it wrong
    }
    if (current) {
      let labels = deleteModalLabels.map((x) => valueByString(current, x)).join(' ');

      setDisplayItem(labels);
    }
  }, [isSuccess, current]);

  const handleOk = () => {
    const id = current.id;
    dispatch(crud.delete({ entity, id }));
    readBox.close();
    modal.close();
    panel.close();
    navMenu.collapse();
  };
  const handleCancel = () => {
    if (!isLoading) modal.close();
  };
  return (
    <Modal
      title={modalTitle}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={isLoading}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Hủy
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Đồng ý
        </Button>,
      ]}
    >
      <p>
        {deleteMessage}
        <span> {displayItem}</span>
      </p>
    </Modal>
  );
}
