import AppRoutes from "./Routes";
import Container from "./Pages/Container";
import { store } from "./Reducers/store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Container>
                <AppRoutes />
            </Container>
        </Provider>
    );
}

export default App;
