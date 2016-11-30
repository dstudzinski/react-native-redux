import SettingsView from './screens/SettingsView';
import NewProcedureView from './screens/NewProcedureView';
import ProceduresListView from './screens/ProceduresListView';

const routes = {
  settingsView: {key: 'settingsView', title: 'routes.settingsView', component: SettingsView},
  newProcedureView: {key: 'newProcedureView', title: 'routes.newProcedureView', component: NewProcedureView},
  proceduresListView: {key: 'proceduresListView', title: 'routes.proceduresListView', component: ProceduresListView}
};

export const defaultRoute = routes.settingsView;

export default routes;