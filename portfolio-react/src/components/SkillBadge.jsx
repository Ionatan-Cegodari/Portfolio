function SkillBadge({ name, image }) {
  return (
    <div className="skill-badge">
      <img src={`/assets/${image}`} alt={name} />
      <div className="skill-badge__overlay">
        <span className="skill-badge__name">{name}</span>
      </div>
    </div>
  )
}

export default SkillBadge
