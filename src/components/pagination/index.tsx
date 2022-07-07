import React from "react";
import ReactPaginate from "react-paginate";
import ICharactersResponse from "../../pages/Home/interfaces";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { StyledPaginateContainer } from "./styles";

type setItemOffsetProps = (number: number) => void;

interface IPaginationProps {
  initialResponse: ICharactersResponse[];
  itemsPerPage: number;
  charactersCount: number;
  itemOffset: number;
  setItemOffset: setItemOffsetProps;
}

const Pagination: React.FunctionComponent<IPaginationProps> = ({
  itemsPerPage,
  charactersCount,
  itemOffset,
  setItemOffset,
}) => {
  const [pageCount, setPageCount] = React.useState(0);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % charactersCount;
    setItemOffset(newOffset);
  };

  React.useEffect(() => {
    setPageCount(Math.ceil(charactersCount / itemsPerPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage, charactersCount]);

  return (
    <StyledPaginateContainer>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<IoIosArrowForward />}
        breakClassName="break-me"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<IoIosArrowBack />}
        containerClassName="pagination"
        pageLinkClassName="page-button"
        activeClassName="active-link"
        previousClassName="prev-button"
        nextClassName="next-button"
      />
    </StyledPaginateContainer>
  );
};

export default Pagination;
