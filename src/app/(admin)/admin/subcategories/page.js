import AddSubCategory from "@/components/addSubCategory/addSubCategory";
import SubCategoriesTable from "@/components/subcategoriesTable/subcategoriesTable";

export default function Subcategories() {
    return (
      <>
      <div className="min-h-screen mx-10 px-1">
        <SubCategoriesTable />
      </div>
    </>
    );
  }