import { useMemo } from "react";


const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};
export const usePagination = ({
    total,
    take,
    siblingCount = 1,
    currentPageIndex
  }) => {

const paginationRange = useMemo(() => {
    // Our implementation logic will go here 
    const totalPageCount= Math.ceil(total/take)
    const DOTS="skip"
    //max no of page numbers 
    const maxPageNumbers = siblingCount + 5;
    
    if (maxPageNumbers >= totalPageCount) {
        return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPageIndex+1 - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPageIndex+1 + siblingCount,
      totalPageCount
    );
    
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * siblingCount;
        let leftRange = range(1, leftItemCount);
  
        return [...leftRange, DOTS, totalPageCount];
    }

if (shouldShowLeftDots && !shouldShowRightDots) {
  
    let rightItemCount = 3 + 2 * siblingCount;
    let rightRange = range(
      totalPageCount - rightItemCount + 1,
      totalPageCount
    );
    return [firstPageIndex, DOTS, ...rightRange];
  }
  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }
 }, [total, take, siblingCount, currentPageIndex]);

 return paginationRange 
}