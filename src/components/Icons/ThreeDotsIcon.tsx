export const ThreeDotsIcon = ({ color }: { color?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 256 256">
      <path fill={color} d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m12-88a12 12 0 1 1-12-12a12 12 0 0 1 12 12m44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12" stroke-width="8" stroke="currentColor" />
    </svg>
  );
};