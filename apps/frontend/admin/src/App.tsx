import { Refine } from '@pankod/refine-core';
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
  Layout,
} from '@pankod/refine-chakra-ui';

import dataProvider from '@pankod/refine-simple-rest';
import { ChakraUIInferencer } from '@pankod/refine-inferencer/chakra-ui';
import routerProvider from '@pankod/refine-react-router-v6';

const { RouterComponent } = routerProvider;

const CustomRouterComponent = () => <RouterComponent basename="/admin" />;

function App() {
  const API_URL = 'http://localhost/api';

  return (
    <ChakraProvider theme={refineTheme}>
      <Refine
        dataProvider={dataProvider(API_URL)}
        notificationProvider={notificationProvider()}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        Layout={Layout}
        resources={[
          {
            name: 'characters',
            list: ChakraUIInferencer,
            create: ChakraUIInferencer,
            edit: ChakraUIInferencer,
            show: ChakraUIInferencer,
          },
          {
            name: 'games',
            list: ChakraUIInferencer,
            create: ChakraUIInferencer,
            edit: ChakraUIInferencer,
            show: ChakraUIInferencer,
          },
          {
            name: 'rooms',
            list: ChakraUIInferencer,
            create: ChakraUIInferencer,
            edit: ChakraUIInferencer,
            show: ChakraUIInferencer,
          },
          {
            name: 'images',
            list: ChakraUIInferencer,
            create: ChakraUIInferencer,
            edit: ChakraUIInferencer,
            show: ChakraUIInferencer,
          },
          {
            name: 'users',
            list: ChakraUIInferencer,
            create: ChakraUIInferencer,
            edit: ChakraUIInferencer,
            show: ChakraUIInferencer,
          },
        ]}
        routerProvider={{
          ...routerProvider,
          RouterComponent: CustomRouterComponent,
        }}
      />
    </ChakraProvider>
  );
}

export default App;
