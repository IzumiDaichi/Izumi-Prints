function Menu({ color = "#000000", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7H21"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12H21"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 17H21"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export { Menu };
