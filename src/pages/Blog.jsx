//* componente pai


//* Importar o componente filho
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import BlogSection from "../components/BlogSection";


function Blog() {
  return (
    <>
      <NavBar/>
      <BlogSection />
      <Footer/>
    </>
  );
}

export default Blog;
