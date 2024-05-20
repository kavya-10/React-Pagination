// import React, { useEffect, useState } from "react";
// import useFetch from "../hooks/useFetch";
// import Header from "../Components/HeaderHome";
// import { useQuery } from "../context/queryContext";
// import { useSearch } from "../context/searchContext";
// import { usePagination } from "../context/paginationContext";
// import ReactPaginate from "react-paginate";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Character from "./Character";
// import Spells from "./spells";
// // import CharacterDetails from "./CharacterDetailspage";

// const CharacterListPage = () => {
//   const { query } = useQuery();
//   const { search } = useSearch();
//   const { allData } = useFetch(query, search);

//   const {
//     records,
//     totalpages,
//     Pagenumbers,
//     pageCount,
//     handlePageChange,
//     handlePageCountChange,
//   } = usePagination();

//   const [filteredChar, setFilterChar] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const filteredCharacters = records.filter((person) => {
//       return person.name.toLowerCase().includes(search.toLowerCase());
//     });
//     setFilterChar(filteredCharacters);
//   }, [search, records]);

//   const handlePageClick = (data) => {
//     const selectedPage = data.selected + 1;
//     handlePageChange(selectedPage);
//   };

//   const handleCardClick = (id) => {
//     navigate(/character/${id});
//   };

//   return (
//     <div className="container my-4">
//       <Header />
//       <section className="row my-1 gy-5">
//         {filteredChar.map((data) => (
//           <motion.div
//             className="col-sm-12 col-md-4 col-lg-4 col-12"
//             key={data.id}
//             animate={{ opacity: 1 }}
//             onClick={() => handleCardClick(data.id)}
//           >
//             {query !== "spells" ? (
//               <Character data={data} />
//             ) : (
//               <Spells spell={data} />
//             )}
//           </motion.div>
//         ))}
//       </section>
//       <Pagination pageCount={totalpages} handlePageClick={handlePageClick} />
//     </div>
//   );
// };

// const Pagination = ({ pageCount, handlePageClick }) => {
//   return (
//     <div>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next>"
//         previousLabel="<previous"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={3}
//         marginPagesDisplayed={1}
//         pageCount={pageCount}
//         renderOnZeroPageCount={null}
//         containerClassName={"pagination justify-content-center"}
//         pageClassName={"page-item"}
//         pageLinkClassName={"page-link"}
//         previousPageClassName={"page-item"}
//         previousLinkClassName={"page-link"}
//         nextLinkClassName={"page-link"}
//         nextClassName={"page-item"}
//         breakClassName={"page-item"}
//         breakLinkClassName={"page-item"}
//         activeClassName={"active"}
//       />
//     </div>
//   );
// };

// export default CharacterListPage;

import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Header from "../Components/HeaderHome";
import { useQuery } from "../context/queryContext";
import { useSearch } from "../context/searchContext";
import { usePagination } from "../context/paginationContext";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Character from "./Character";
import Spells from "./spells";

const CharacterListPage = () => {
  const { query } = useQuery();
  const { search } = useSearch();
  const { allData } = useFetch(query, search);

  const {
    records,
    totalpages,
    Pagenumbers,
    pageCount,
    handlePageChange,
    handlePageCountChange,
  } = usePagination();

  const [filteredChar, setFilterChar] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCharacters = records.filter((person) => {
      return person.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilterChar(filteredCharacters);
  }, [search, records]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    handlePageChange(selectedPage);
  };

  const handleCardClick = (id) => {
    navigate(`/character/${id}`);
  };

  return (
    <div className="container my-4">
      <Header />
      <section className="row my-1 gy-5">
        {filteredChar.map((data) => (
          <motion.div
            className="col-sm-12 col-md-4 col-lg-4 col-12"
            key={data.id}
            animate={{ opacity: 1 }}
          >
            {query !== "spells" ? (
              <Character data={data} onCardClick={handleCardClick} />
            ) : (
              <Spells spell={data} />
            )}
          </motion.div>
        ))}
      </section>
      <Pagination pageCount={totalpages} handlePageClick={handlePageClick} />
    </div>
  );
};

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next>"
        previousLabel="<previous"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousPageClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        nextClassName={"page-item"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-item"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default CharacterListPage;