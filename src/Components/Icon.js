const icons = {
  account: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  blog: (
    <>
      <path d="M5 4h14v16H5z" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
    </>
  ),
  cart: (
    <>
      <path d="M4 5h2l2.2 10.5h9.4L20 8H7" />
      <circle cx="10" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  contact: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  delivery: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  filter: (
    <>
      <path d="M4 6h16" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </>
  ),
  heart: (
    <path d="M20.2 5.8a5 5 0 0 0-7.1 0L12 6.9l-1.1-1.1a5 5 0 1 0-7.1 7.1L12 21l8.2-8.1a5 5 0 0 0 0-7.1z" />
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  location: (
    <>
      <path d="M12 22s7-6.1 7-13a7 7 0 0 0-14 0c0 6.9 7 13 7 13z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  lock: (
    <>
      <path d="M6 11h12v10H6z" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  phone: (
    <path d="M7 4h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3a3 3 0 0 1-3.2 3A15.8 15.8 0 0 1 4 7.2 3 3 0 0 1 7 4z" />
  ),
  return: (
    <>
      <path d="M9 7H5v4" />
      <path d="M5 11a8 8 0 1 0 2.3-5.7L5 7.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m16 16 4 4" />
    </>
  ),
  shop: (
    <>
      <path d="M4 10h16l-1.4-5H5.4z" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-5h6v5" />
    </>
  ),
  spark: (
    <path d="M13 2 4 14h7l-1 8 10-13h-7z" />
  ),
};

function Icon({ name, className = "", size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      className={`icon ${className}`.trim()}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        {icons[name]}
      </g>
    </svg>
  );
}

export default Icon;
