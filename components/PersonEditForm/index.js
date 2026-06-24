import PersonForm from "../PersonForm";

export default function PersonEditForm({
  name,
  birth_year,
  color,
  activeMode,
  setActiveMode,
  personUpdateError,
  handlePersonUpdate,
}) {
  return (
    <>
      {activeMode === "edit" && (
        <PersonForm
          onSubmit={handlePersonUpdate}
          defaultValues={{ name, birth_year, color }}
          updateMode={true}
          setUpdateMode={() => setActiveMode(null)}
        />
      )}
      {personUpdateError && <p role="alert">{personUpdateError}</p>}
    </>
  );
}
