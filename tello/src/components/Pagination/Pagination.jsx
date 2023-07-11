import Styles from './pagination.module.css';

const Pagination = ({ productsPerPage, totalProducts, setCurrentPage }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }




    return (
      <nav>
      <ul className={Styles.pagination}>
        {pageNumbers.map((number, index) => {
          return <button key={index} onClick={() => setCurrentPage(number)}>{number} </button>}
        
        )}
      </ul>
    </nav>
  )
}

export default Pagination