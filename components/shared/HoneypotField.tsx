/**
 * Anti-spam honeypot field.
 * Renders a visually hidden input that bots will fill in.
 * If the value is non-empty on submission, the form should be silently rejected.
 *
 * Uses absolute positioning off-screen instead of display:none
 * (bots can detect display:none and skip it).
 */
export default function HoneypotField() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      <label htmlFor="website">
        Ne pas remplir ce champ
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
    </div>
  );
}
