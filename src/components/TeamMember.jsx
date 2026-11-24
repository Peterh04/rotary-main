import "../styles/TeamMember.css";

const initials = (name) => {
  const words = name.trim().split(/\s+/);
  return (
    words[0][0] + (words.length > 1 ? words[words.length - 1][0] : "")
  ).toUpperCase();
};

/** Round photo (or initials if there is no photo), name and role. */
export default function TeamMember({ name, role, photo }) {
  return (
    <div className="team-member">
      {photo ? (
        <img
          className="team-member__photo"
          src={photo}
          alt={name}
          loading="lazy"
        />
      ) : (
        <div className="team-member__initials" aria-hidden="true">
          {initials(name)}
        </div>
      )}
      <div>
        <p className="team-member__name">{name}</p>
        <p className="team-member__role">{role}</p>
      </div>
    </div>
  );
}
