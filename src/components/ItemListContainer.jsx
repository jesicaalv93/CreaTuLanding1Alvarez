import logo from "../assets/logo.png";
import { useGetCategories } from "../hooks/useGetCategories";

const ItemListContainer = ({ message }) => {
  const { categoriesList, loading } = useGetCategories();
  if (loading) {
    return <h2 className="text-center my-5">Cargando...</h2>;
  }
  
  return (
    <div className="container my-5 text-center">
      <img 
        src={logo} 
        alt="Logo Latir" 
        width="300"
        height="300" 
        className="mb-3"
      />
      <h2 className="fw-bold">{message}</h2>
      <p className="mt-4">Diseñamos prendas versátiles y atemporales, pensadas para la mujer con estilo que valora la elegancia en lo simple.<br></br>
        Cada pieza es de industria nacional, creada con dedicación y cuidado para acompañarte en todos tus momentos.</p>
    </div>
  );
};

export default ItemListContainer;
