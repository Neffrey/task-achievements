// LIBRARIES
// import { FaPenSquare, FaWindowClose } from "react-icons/fa";
import {
  type UseTRPCQueryResult,
  type UseTRPCMutationResult,
} from "@trpc/react-query/shared";
import {TData, TError } from "@trpc/react-query/shared";

// PROPS
type FilterGridProps = {
  dataTitle: string;
//   fetchQuery: UseTRPCQueryResult<unknown, unknown>;
//   updateMutation: UseTRPCMutationResult<unknown, unknown, any, unknown>;
//   deleteMutation: UseTRPCMutationResult<unknown, unknown, any, unknown>;
  fetchQuery: UseTRPCQueryResult<TData, TError>;
  updateMutation: UseTRPCMutationResult<unknown, unknown, any, unknown>;
  deleteMutation: UseTRPCMutationResult<unknown, unknown, any, unknown>;
  disableAllSort?: boolean | undefined;
  disableAllSearch?: boolean | undefined;
  columns: {
    dataKey: string;
    title: string;
    gridSpan?: number | undefined;
    disableSort?: boolean | undefined;
    disableSearch?: boolean | undefined;
    type?: "boolean" | "date" | "text" | undefined;
    justify?: "start" | "center" | "end" | undefined;
    textSize?:
      | "xs"
      | "sm"
      | "base"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | undefined;
    titleSize?:
      | "xs"
      | "sm"
      | "base"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | undefined;
  }[];
};

// COMPONENT
const FilterGrid = ({
  dataTitle,
  fetchQuery,
  updateMutation,
  deleteMutation,
  disableAllSort,
  disableAllSearch,
  columns,
}: FilterGridProps) => {
    const data = fetchQuery.data;
  // HELPERS
  const countTableColumns = () => {
    let count = 0;
    columns.forEach((column) => {
      if (column.gridSpan) count += column.gridSpan;
      else count++;
    });
    return count;
  };
  if (fetchQuery.isLoading || fetchQuery?.data === undefined)
    return (
      <div className="text-lg text-base-content">{`No ${dataTitle} Found :'(`}</div>
    );
  if (fetchQuery.data)
    return (
      <div className="grid grid-cols-12 items-center gap-4">
        {fetchQuery.data.map((row) => {
          console.log("row: ", row);
        })}
      </div>
    );
};

export default FilterGrid;
