import { Provider } from "react-redux";
import { store } from "./src/store";
import ProductManagerSection from "./src/components/sections/ProductManagerSection";








const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ProductManagerSection />
    </Provider>
  );
};



export default App;
