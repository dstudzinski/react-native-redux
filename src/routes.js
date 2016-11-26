import NewProcedureView from './screens/NewProcedureView';
import ProceduresListView from './screens/ProceduresListView';

const routes = {
  newProcedureView: {key: 'newProcedureView', title: 'routes.newProcedureView', component: NewProcedureView},
  proceduresListView: {key: 'proceduresListView', title: 'routes.proceduresListView', component: ProceduresListView}
};

export const defaultRoute = routes.newProcedureView;

export default routes;