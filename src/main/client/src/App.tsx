import { Refine } from "@refinedev/core";
import { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";
import routerProvider from "@refinedev/react-router-v6";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";

import { dataProvider } from "./dataProvider";
import { StudentsList } from "./pages/students/list";
import { StudentsCreate } from "./pages/students/create";
import { StudentsEdit } from "./pages/students/edit";
import { StudentsShow } from "./pages/students/show";
import { Dashboard } from "./pages/dashboard";

import "antd/dist/reset.css";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Blue}>
        <Refine
          dataProvider={dataProvider()}
          routerProvider={routerProvider}
          DashboardPage={Dashboard}
          resources={[
            {
              name: "students",
              list: StudentsList,
              create: StudentsCreate,
              edit: StudentsEdit,
              show: StudentsShow,
              meta: {
                canDelete: true,
                icon: "👨‍🎓",
              },
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
            useNewQueryKeys: true,
            projectId: "spring-boot-demo",
          }}
        >
          <ThemedLayoutV2 />
        </Refine>
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App
