const DefaultLayout = ({ children }) => {
  return (
    <section className="bg-gray-800 h-screen">
      <div className="w-1/3 mx-auto bg-white h-screen">{children}</div>
    </section>
  );
};

export default DefaultLayout;
