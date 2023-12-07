const Feed = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="bg-gray-900 overflow-y-scroll h-screen p-4">
      {children}
    </div>
  );
};

export default Feed;
