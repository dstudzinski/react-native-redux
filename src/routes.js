import NewProcedureView from './screens/NewProcedureView';
import ProceduresListView from './screens/ProceduresListView';

const routes = {
  newProcedureView: {key: 'newProcedureView', title: 'New procedure', component: NewProcedureView},
  proceduresListView: {key: 'proceduresListView', title: 'Procedures list', component: ProceduresListView}
};

export const defaultRoute = routes.newProcedureView;

export default routes;