import AddCategory from "@/components/addCategory/addCategory";
import CategoriesTable from "@/components/categoriesTable/categoriesTable";

export default function Categories() {
  return (
    <>
      <div className="min-h-screen mx-10 px-1">
        <div className="flex justify-between items-center my-4">
          <AddCategory />
        </div>
        <CategoriesTable />
      </div>
    </>
  );
}
