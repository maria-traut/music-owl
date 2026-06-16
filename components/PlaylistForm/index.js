export default function PlaylistForm() {
  return (
    <form>
      <fieldset>
        <legend>Add a Playlist</legend>
        <section>
          <label htmlFor="title">
            Title<span aria-hidden>*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            aria-required="true"
            maxLength={30}
            title="Title must be between 1 and 30 characters."
          />
        </section>
        <section>
          <label htmlFor="artist">
            Artist<span aria-hidden>*</span>
          </label>
          <input
            type="text"
            id="artist"
            name="artist"
            required
            aria-required="true"
            maxLength={30}
            title="Artist must be between 1 and 30 characters."
          />
        </section>
      </fieldset>
    </form>
  );
}
