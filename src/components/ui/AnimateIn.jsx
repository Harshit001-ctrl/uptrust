
export default function AnimateIn({
  delay = 0,
  by = "text",
  stagger = 0.03,
  as: Tag = "span",
  animated = true,
  className = "",
  style,
  children,
  ...props
}) {
  const isString = typeof children === "string";

  if (!animated || !isString || by === "text") {
    return (
      <Tag
        className={`${animated ? "animate-rise-in" : ""} ${className}`}
        style={{ ...style, animationDelay: delay ? `${delay}s` : undefined }}
        {...props}
      >
        {children}
      </Tag>
    );
  }

  const segments =
    by === "word" ? children.split(/(\s+)/) : Array.from(children);

  return (
    <Tag className={className} style={style} aria-label={children} {...props}>
      {segments.map((segment, i) => (
        <span
          key={`${segment}-${i}`}
          aria-hidden="true"
          className="animate-rise-in inline-block whitespace-pre"
          style={{ animationDelay: `${delay + i * stagger}s` }}
        >
          {segment}
        </span>
      ))}
    </Tag>
  );
}
