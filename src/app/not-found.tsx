const NotFound = () => {
  return (
    <div className="w-full h-[80vh] grid place-items-center bg-gradient-to-br from-orange-100 to-neutral-50 via-neutral-50">
      <div className="flex flex-col justify-center gap-4">
        <p className="text-2xl tracking-tighter font-bold text-neutral-700">
          Oops. Page does not exist
        </p>
        <a
          href=""
          className="underline font-semibold text-center my-2 text-orange-500"
        >
          Go back{" "}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
