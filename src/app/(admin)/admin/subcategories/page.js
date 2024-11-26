import AddSubCategory from "@/components/addSubCategory/addSubCategory";
import DropDown from "@/components/dropDown/dropDown";
import SubCategoriesTable from "@/components/subcategoriesTable/subcategoriesTable";

export default function Subcategories() {
    return (
      <>
      <div className="min-h-screen mx-10 px-1">
        <div className="flex justify-between items-center my-4">
          <DropDown />
          <AddSubCategory />
        </div>
        <SubCategoriesTable />
      </div>
    </>
    );
  }