import SubCategoriesTable from "@/components/subcategoriesTable/subcategoriesTable";

export default function Subcategories({ searchParams }) {
  console.log("searchParams=>", searchParams);

  return (
    <div className="min-h-screen mx-10 px-1">
      <SubCategoriesTable />
    </div>
  );
}
