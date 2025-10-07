export const FxIcon = ({ color }: { color: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
      <g fill="#fff" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
        <circle cx="12" cy="12" r="3" />
        <path d="M2 9a4 4 0 0 0 4-4v0m12 14a4 4 0 0 1 4-4v0" />
      </g>
    </svg>
  )
};