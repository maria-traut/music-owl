import PersonForm from "../PersonForm";

export default function PersonEditForm({
  name,
  birth_year,
  color,
  activeMode,
  setActiveMode,
  personUpdateError,
  onPersonUpdate,
}) {
  return (
    <>
      {activeMode === "edit" && (
        <PersonForm
          onSubmit={onPersonUpdate}
          defaultValues={{ name, birth_year, color }}
          updateMode={true}
          setUpdateMode={() => setActiveMode(null)}
        />
      )}
      {personUpdateError && <p role="alert">{personUpdateError}</p>}
    </>
  );
}
