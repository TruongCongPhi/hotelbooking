import { ErpLayout } from '@/layout';
import CreateItem from './CreateItem';
import TourForm from '../Forms/TourForm';

export default function CreateTourModule({ config, withUpload = true }) {
  return (
    <ErpLayout>
      <CreateItem config={config} withUpload={withUpload} CreateForm={TourForm} />
    </ErpLayout>
  );
}
