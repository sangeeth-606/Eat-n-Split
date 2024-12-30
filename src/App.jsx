import { BrowserRouter, Routes } from "react-router-dom";
import { Route, Navigate } from "react-router";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./components/contexts/CitiesContext";

function App() {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchCities() {
  //     try {
  //       const response = await fetch("http://localhost:5000/cities");
  //       const data = await response.json();
  //       setCities(data);
  //       setIsLoading(true);
  //     } catch {
  //       alert("Error fetching cities:");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   fetchCities();
  // }, []);
  return (
    <>
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<Navigate replace to='cities' />}
            />
            <Route
              path="cities"
              element={<CityList  />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route path="form" element={<Form />} />
            <Route
              path="countries"
              element={<CountryList />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </CitiesProvider>
    </>
  );
}

export default App;