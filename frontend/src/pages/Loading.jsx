const Loading = () => {
  return (
    <div className="flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-[25vh] size-30 animate-spin"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3a9 9 0 1 0 9 9" />
      </svg>
    </div>
  );
};

export default Loading;
